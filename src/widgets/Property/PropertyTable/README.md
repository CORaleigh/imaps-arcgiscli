## Property List Widget
Displays a list of the selected properties.  Built using the FeatureTable widget from the ArcGIS JavaScript API.  

### Properties
#### view
The map view
#### propertyLayer
The property feature layer.
#### condoTable
The condo feature table.
#### definitionExpression
The where statement to filter the FeatureTable widget.  The property is watches for changes which triggers the update of the definitionExpression for the feature table widget.

### Functions
#### getProperty()
Gets the property for the condo record selected in the table.
#### featureTableCreated()
Creates the feature table widget after the container is created.
#### propertyUpdated()
Triggered when the propertyFeature property is updated.

### Events
#### feature-selected
Emits the selected feature to the PropertyPanel widget when a feature is selected from the table.
