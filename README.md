установить nodejs v20+    
установить npm v10+ (может установится вместе с нодой, проверь перед установкой)   

проверить в терминале    
`node -v`   
`npm -v`   

выполнить один раз 
`npm i`

для запуска выполнить
`npm start`

конфиги кейклока лежат в `keycloak/index.js` 

конфиги урл для запроса в `api/index.js`

в кейклоке    
- создать реалм - myfit  
- создать клиента c id = react
- клиенту утановить Valid redirect URI = `http://localhost:3000/*`
- установить realm settings -> login -> User registration -> on  
