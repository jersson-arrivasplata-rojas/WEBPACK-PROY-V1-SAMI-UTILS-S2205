export class SocialMediaShare {
    constructor() { }
    shareLinkedin(url: string): boolean {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, 'sharer', 'toolbar=0,status=0,width=626,height=436');
        return false;
    }
    shareFacebook(url: string, title: string): boolean {
        window.open(`http://www.facebook.com/sharer.php?u=${url}&quote=${String(title).replace(/\&/g, '%26')}`, 'sharer', 'toolbar=0,status=0,width=626,height=436');
        return false;
    }
    shareWhatsapp(url: string){
        location.href = `https://api.whatsapp.com/send?phone=&text=${url}`;
    }
}