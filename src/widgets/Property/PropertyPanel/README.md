## Property Panel Widget
Container for the different components of the property search.
### Properties
#### view
The map view
#### propertyLayer
The property feature layer.
#### condoTable
The condo feature table.
#### addressTable
The address feature table.
#### geometry
The geometry to search by, this is from the PropertySelect widget and from long pressing on the map.

### Functions
#### geometryChanged()
Triggered when the geometry property is changed by either the PropertySelect widget or long pressing on the map.
#### selectFeature()
Event emitted from the PropertySearch widget when a feature is selected.  Sets the feature for the PropertyInfo widget and the definition expression for the PropertyList widget.
#### searchDivCreated()
When the div container for the PropertySearch widget is created

#### tableCreated()
When the div container for the PropertyList widget is created


