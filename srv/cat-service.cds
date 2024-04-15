using Books as View_Books from '../db/data-model';

service CatalogService {
    @odata.draft.enabled
    entity Books as projection on View_Books;
}
