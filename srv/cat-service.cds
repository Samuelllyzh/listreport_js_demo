using Books as View_Books from '../db/data-model';

service CatalogService {
    @readonly entity Books as projection on View_Books;
}
