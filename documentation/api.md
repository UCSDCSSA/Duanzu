# API List

For front-end, please rely on this API list to develop the back-end:

| Path | Parameters | Return Code | Return Message | Return Content | Description |
| ----| ----| ----|  ----| ----| ----| ----|
|/api/change_password | String **old_pw** - SHA256 encrypted password(256 bit)<br>String **new_pw** - SHA256 encrypted password(256 bit)<br>String **cfm_w** - SHA256 encrypted password(256 bit) | 103, 104, 105, 107 | success:{<br>code: 0<br>msg:“success”<br>}| cookies | TBA |
|/api/foget_password | String **email** - valid email| 101, 106, 109 | success:{<br>code: 0<br>msg:“success”<br>}| cookies | TBA |
|/api/change_profile| String **username** - new username<br>String **picture **- new uploaded profile picture<br>int **phone** - new phone number| 101, 110, 111|  success:{<br>code: 0<br>msg:“success”<br>} | cookies | TBA |
|/api/register| String **email** - valid email address<br>String **password** - SHA256 encrypted password (256 bits) <br> String **username** - encoding UTF-8|105, 106, 108, 109 | success:{<br>code: 0<br>msg:“success”<br>} | cookies | TBA |
|/api/login| String **email** - valid email address<br>String **password** - SHA256 encrypted password(256 bit) | 101, 102 | success:{<br>code: 0<br>msg:“success”<br>} | cookies | TBA |
|/api/logout| | |success:{<br>code: 0<br>msg:“success”<br>} || TBA|




| Error Code | Description |
|------------|-------------|
| 101 | Email does not exist |
| 102 | Incorrect Password |
| 103 | Old password does not match |
| 104 | New password/Confirm password do not match |
| 105 | Password Invalid |
| 106 | Email has already been used |
| 107 | Input is null |
| 108 | Username illegal |
| 109 | Email illegal |
| 110 | Picture uploaded not valid |
| 111 | Profile failed to be modified |
