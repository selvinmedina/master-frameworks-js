import Global from '../Global'
export default class Helpers {
    static url = Global.url;
    static obtenerImagen = (image) => {
        return (
            image != null ? (this.url + 'get-image/' + image)
                : ("https://www.tryngo.ch/img/no-img.jpg")
        );
    }
}