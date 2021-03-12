## Property Search Widget
Allow for the searching of properties based on address, owner, street name, PIN and real estate ID.  Uses the Search widget from the ArcGIS JavaScript API.
### Properties
#### view
The map view
#### propertyLayer
The property feature layer.
#### condoTable
The condo feature table.
#### addressTable
The address feature table.

### Functions
#### searchWidgetCreated()
Initializes the search widget when its container is created.
#### getWildcardSearchWhere()
If user hits enter, a where clause is built based on what the user had entered.
#### wildcardSearch()
Users the wildcard where clause to search for property information.
#### searchResultsSelected()
When the users selects a suggestion from the seach widget.  The condos table is then search based on what was selected.  If selected from the address table, the searchRelatedCondos function is called, if selected from the condos table, the searchCondos function is called.
#### searchCondos()
Searches the condo table using the search term selected from the search widget suggestions.
#### searchRelatedCondos()
Searches the condo records related to the selected address or street record.  
#### getProperty()
Returns the properties related to the selected condo records.
#### getLayerSource()
Adds the different layer sources to the search widget, this includes Address, Owner, PIN, REID, and street name.  
#### getSuggestions()
Builds the where statements to search the layer sources by.

### Events
#### feature-selected
Emits the selected feature to the PropertyPanel widget when a single feature is returned.
#### features-selected
Emits the selected features to the PropertyPanel widget when multiple features are returned.
#### properties-selected
Emits the selected properties to the PropertyPanel widget which triggers the map extent change.
