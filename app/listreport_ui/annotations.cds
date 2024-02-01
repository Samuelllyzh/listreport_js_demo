using CatalogService as service from '../../srv/cat-service';


////////////////////////////////////////////////////////////////////////////
//	List Page                                                             //
////////////////////////////////////////////////////////////////////////////
annotate service.Books with @(UI: {
  SelectionFields: [
    ID,
    title,
    stock
  ],
  LineItem: [
        {
            $Type : 'UI.DataField',
            Label : '编号',
            Value : ID,
        },
        {
            $Type : 'UI.DataField',
            Label : '书名',
            Value : title,
        },
        {
            $Type : 'UI.DataField',
            Label : '在库',
            Value : stock,
        },
    ],
});

// hidden search fields
annotate service.Books with @Capabilities: {
    SearchRestrictions: {Searchable: false}
};


////////////////////////////////////////////////////////////////////////////
//	object Page                                                           //
////////////////////////////////////////////////////////////////////////////
annotate service.Books with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'ID',
                Value : ID,
            },
            {
                $Type : 'UI.DataField',
                Label : 'title',
                Value : title,
            },
            {
                $Type : 'UI.DataField',
                Label : 'stock',
                Value : stock,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
