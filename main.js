

window.OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: "0727e2e0-25b1-456a-9e64-034a935c0878",
      notifyButton: {
        enable: true,
      },
       subdomainName: "system-mk",
    });
  });      

function send()
{                                                                                           
    web_buttons=[
         {
          "id":"YES",
          "text":"I am willing" ,
          "url": "https://example.com/?_osp=do_not_open"
         },
         {
           "id":"NO",
           "text":"I am not willing",
           "url": "https://example.com/?_osp=do_not_open"
         }]                 
        body = {  
         "app_id": "0727e2e0-25b1-456a-9e64-034a935c0878",               
         "contents": {"en": "Hello, someone is waiting for you!!!! If you want to aceept the job request, click on I am willing"},
         "headings" : {"en": "A job request!"},
         "data": {"foo":"bar"},                                          
         "include_player_ids":["4384c913-09f7-4b17-8344-e456ef617333"],           
         "buttons": web_buttons
        }                    
          fetch('https://onesignal.com/api/v1/notifications', {
               method: 'POST',
               body: JSON.stringify(body),
                headers: {               
                  "Content-type": "application/json; charset=utf-8",
                  "Authorization": "Basic NzJjNTg0NzUtMzU2Zi00OTExLTgzMTktZmJjM2Y5NDQ5Y2E4"
                }
           }).then(response => response.json())
            .then(json => {
            console.log(json);
            if(json != null)
            {
              fetch();
            }
            
          });
     }
function fetch()
{
   fetch('https://onesignal.com/api/v1/notifications/eb82fca8-dbb2-43db-a60e-bf7a8a550b68?app_id=0727e2e0-25b1-456a-9e64-034a935c0878', {
               method: 'POST',
               mode: 'no-cors',
                headers: {               
                  "Content-type": "application/json; charset=utf-8",
                  "Authorization": "Basic NzJjNTg0NzUtMzU2Zi00OTExLTgzMTktZmJjM2Y5NDQ5Y2E4"
                }
           }).then(response => response.json())
            .then(json => {
            console.log(json);
             });
}
 
