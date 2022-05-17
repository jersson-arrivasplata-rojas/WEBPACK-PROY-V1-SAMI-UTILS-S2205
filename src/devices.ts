
export class Devices {
    constructor() { }
   
    isMobile(){
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    }
}
