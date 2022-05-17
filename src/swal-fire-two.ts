import Swal from 'sweetalert2';

export class SwalFireTwo {
    constructor() { }
    swalFireTimerToCopyCode() {
        let timerInterval: any;//: NodeJS.Timeout
        Swal.fire({
            title: '¡El c&oacute;digo se ha copiado - Ctrl + v para pegar!',
            html: 'Se cerrara en <b></b> milisegundos.',
            width: 600,
            padding: '3em',
            color: '#0652dd',
            background: "#fff",
            backdrop: `
                rgba(0,0,123,0.4)
                left top
                no-repeat
            `,
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                if (Swal.getHtmlContainer()) {
                    const b: any = Swal.getHtmlContainer()?.querySelector('b')
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft()
                    }, 100)
                }
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        });
    }
    swalFireTimerToSuccess(title: string, background: string, backdrop:string) {
        let timerInterval: any;//: NodeJS.Timeout
        Swal.fire({
            title: title,
            html: 'Se cerrara en <b></b> milisegundos.',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: background,
            backdrop: backdrop,
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                if (Swal.getHtmlContainer()) {
                    const b: any = Swal.getHtmlContainer()?.querySelector('b')
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft()
                    }, 100)
                }
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        });
    }
}