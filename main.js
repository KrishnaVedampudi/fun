

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
outcome = "";
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
              const body = {    
               "app_id": "0727e2e0-25b1-456a-9e64-034a935c0878",               
               "contents": {"en": "Hello, someone is waiting for you!!!! If you want to aceept the job request, click on I am willing"},
               "headings" : {"en": "A job request!"},
               "data": {"foo":"bar"},                                          
               "include_player_ids":["48978aa4-fa9d-4b18-b871-e1fd86a1a7df"],           
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
                var outcomes=[""];
                outcomes = json;
                outcome = outcomes.id;
                console.log(outcome);
                setTimeout(function()
                {
                  view_notification();
                },6000);                
                 });}
function view_notification()
{  
  fetch("https://onesignal.com/api/v1/notifications/"+outcome+"?app_id=0727e2e0-25b1-456a-9e64-034a935c0878&outcome_names=os__click.count&outcome_platforms=0", {
                     mode:'no-cors',     
                     method: 'POST',                     
                      headers: {               
                        "Content-type": "application/json; charset=utf-8",
                        "Authorization": "Basic NzJjNTg0NzUtMzU2Zi00OTExLTgzMTktZmJjM2Y5NDQ5Y2E4"
                      }
                 })
                   .then(
                      response => response.json()
                   ).then(
                       json => 
                         {
                            console.log(json);   
                            ThunkableWebviewerExtension.postMessage("Como estas?");
                         }
                     ) 
}
