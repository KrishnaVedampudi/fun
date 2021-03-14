var outcomes = [null];
var outcome = null;
window.OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: "0727e2e0-25b1-456a-9e64-034a935c0878",
      notifyButton: {
        enable: true,
      },
    });
  });
function isPushNotificationsEnabledVerbose() {
    console.log('isPushNotificationsEnabledVerbose()');
    Promise.all([            
            OneSignal.getUserId(),
            OneSignal.getRegistrationId(),
            OneSignal.getNotificationPermission(),
            OneSignal.isOptedOut(),
            OneSignal.context.serviceWorkerManager.getActiveState()
        ])
        .then(([isSubscribed, userId, registrationId, notificationPermission, optedOut, serviceWorkerActive]) => {
            console.log('Is Completely Subscribed:', isSubscribed);
            console.log('');
            console.log('What is our OneSignal user ID?', userId);
            console.log('What is our push subscription token?', registrationId);
            console.log('What is the notification permission status?', notificationPermission);
            console.log('Are you manually opted out?', optedOut);
            console.log("Is a service worker registered and active? (should be false on Safari, otherwise should be 'Worker A (Main)')?", serviceWorkerActive);
            console.log('What is the current URL of this page?', location.href);
            console.log("What environment does OneSignal think it's in?", OneSignal.sdkEnvironment.getWindowEnv());
        })
        .catch(e => {
            console.error("Issue determining whether push is enabled:", e);
        });
}
isPushNotificationsEnabledVerbose();
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
               "include_player_ids":["5625de9d-2842-4005-94a6-1a1b0dfd6d0e"],           
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
                });
            }
OneSignal.push(["addListenerForNotificationOpened", function(event) {
  console.log("OneSignal notification clicked:", event);
  if (event.action === "") {
      console.log('body is clicked')
    } else if (event.action === 'YES') {      
      console.log("Glad you liked it! We'll show you similar stories in the future");
    } else if (event.action === 'NO') {
      // The "Read more" action button was clicked
      alert('Showing you the full news article...');
    }  
}]);
