/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import esri = __esri;

import Accessor from '@arcgis/core/core/Accessor';
import Feature from '@arcgis/core/widgets/Feature';
import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';
import { watch } from '@arcgis/core/core/watchUtils';
import * as promiseUtils from '@arcgis/core/core/promiseUtils';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

@subclass('app.widgets.PropertyInfo.PropertyInfoViewModel')
export default class PropertyInfoViewModel extends Accessor {
	@property() view!: esri.MapView | esri.SceneView;
	@property() propertyFeature!: esri.Graphic;
	featureWidget!: Feature;
	constructor(params?: any) {
		super(params);
		watch(this, 'propertyFeature', this.propertyUpdated.bind(this));
	}

	getPhotos = (feature: __esri.Graphic) => {
		return promiseUtils.create(function (resolve) {
			const relationship = (feature.layer as FeatureLayer)?.relationships.find((r) => {
				return r.name === 'CONDO_PHOTOS';
			});
			const media = ((feature.layer as FeatureLayer).popupTemplate.content as esri.Content[]).find(
				(content: esri.Content) => {
					return content?.type === 'media';
				},
			);
			(media as esri.MediaContent).mediaInfos = [];
			const mediaInfos: any[] = [];
			const layer: FeatureLayer = feature.layer as FeatureLayer;
			layer
				?.queryRelatedFeatures({
					relationshipId: relationship?.id,
					objectIds: [feature.getAttribute('OBJECTID')],
					outFields: ['*'],
				})
				.then((result) => {
					for (const key in result) {
						result[key].features.forEach((feature: esri.Graphic) => {
							mediaInfos.push({
								title: '',
								type: 'image',
								caption: '',
								value: {
									sourceURL: `https://services.wakegov.com/realestate/photos/mvideo/${feature.getAttribute(
										'IMAGEDIR',
									)}/${feature.getAttribute('IMAGENAME')}`,
								},
							});
						});
					}

					(media as esri.MediaContent).mediaInfos = mediaInfos;
					resolve();
				});
		});
	};

	propertyUpdated = () => {
		if (!this.featureWidget) {
			this.featureWidget = new Feature({ container: 'featureWidget', view: this.view });
		}

		this.featureWidget.graphic = this.propertyFeature;

		this.getPhotos(this.featureWidget.graphic).then(() => {
			this.featureWidget.graphic.popupTemplate = (this.featureWidget.graphic.layer as FeatureLayer).popupTemplate;
			this.featureWidget.renderNow();
			setTimeout(() => {
				document.querySelector('.esri-feature')?.parentElement?.scrollTo({ top: 0, behavior: 'smooth' });
			});
		});
	};

	featureWidgetCreated = () => {};
}
