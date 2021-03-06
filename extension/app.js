let urlArr = location.href.split('/');  //Get splited URL

    function getKPId (arr) {    //Function for parsing ID from URL
        let id = arr[arr.length - 2];
        return id;
    };

    function createButton () {
        let elem = document.createElement('div')    //Creating button
        elem.className = 'play_yohoho';

        elem.innerHTML = `
            <input type="button" id="play_yohoho" value="<<< Смотреть в плеере Yohoho">     
        `;

        let styles = document.createElement('style');   //Creating Styles
        styles.innerHTML = `
            .play_yohoho {
                position: fixed;
                top: calc(50% - 40px);
                right: -198px;
                width: fit-content;
                height: 80px;
                z-index: 99999;
                transition: .5s;
            }
            .play_yohoho:hover{
              right: 0;
            }
            #play_yohoho {
                border: 0;
                border-radius: 40px 0 0 40px;
                background: #00a37d;
                width: 100%;
                height: 100%;
                padding: 0px;
                font-family: 'Segoe UI';
                color: #fff;
                transition: .5s;
                cursor: pointer;
                box-shadow: 0px 0px 4px 1px #000
            }
            #play_yohoho:hover {
                background: #00755a;
                padding: 30px;
            }
        `;
        //Append styles and content
        document.head.append(styles);

        document.body.append(elem);
    }

    function eventHandler () {  //Creating event handler for button
        let elem = document.getElementById('play_yohoho');
        elem.addEventListener('click', () => {
            let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=1280,height=720`; // Setting up parameters for popup window
            window.open(`http://localhost:8086/?id=${getKPId(urlArr)}`, 'Yohoho Kinopoisk Player', params);     //Open popup window with player
        });
    }
    
    //Initialize button and event handler
    createButton();
    eventHandler();
