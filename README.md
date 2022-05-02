# Test-Automation-with-Cypress
test run commands vidio : https://drive.google.com/drive/u/0/folders/1a-5DiO-HjIjOFjEi9JbBLzr0JxmPzjM4


Automation Testing in Cypress 

WHATS CYPRESS AND AUTOMATION TESTING Diff. 

Cypress is a NodeJS-based test automation framework for the modern web. It uses JavaScript as a programming language. 

Unlike other tools, the Cypress automation tool can be used for a variety of tests – unit tests, integration tests, end to end tests, API tests, etc. Cypress also comes with multiple in-built functionalities to make developers’ and QA’s jobs easier.


__________________________________________________________________________________________________________________________________________
Entering to skills match website 
![image](https://user-images.githubusercontent.com/100388300/166170949-f34b0c7b-ef51-43a1-bd55-4c8a434d26f8.png)


By enter user name and Passwoard 



Update My Skills 


![image](https://user-images.githubusercontent.com/100388300/166170917-6a91096b-aa96-4fea-8b43-1f5cc46e37d8.png)




![image](https://user-images.githubusercontent.com/100388300/166170973-eba0bdb4-b3aa-4f34-a69a-003bc535b823.png)



Here we choose the results that are suitable for us in the evaluation By using Xpath 

By setting the option we want and copying the Xpath for this option 
after that calling .click() function to click and choose the option we need 


like this whay for all questions 


the result after that score like 16/16 ... 
with stars rate 

![image](https://user-images.githubusercontent.com/100388300/166172148-843d4c41-dc82-4e7e-a68e-9dbfb7da8e90.png)

________________________________________________________________________

cheack if the area scores match with answered questons

![image](https://user-images.githubusercontent.com/100388300/166172238-644e6693-5199-4665-a5f6-1e57dcd6b37f.png)


In the update test case 
 has a form with questions, the option above has a score of 0, and the last one, can be 5, 4 or 3
 
 ![image](https://user-images.githubusercontent.com/100388300/166172275-0e8c727d-25d4-426e-939d-25bb1c1c8240.png)


if we choose the last option the score = 4 .... 


_________________________________________________________________________

Direct Searching

![image](https://user-images.githubusercontent.com/100388300/166172880-bc7bfed1-75d1-441e-b361-58bb5db1a446.png)


<         cy.xpath("//a[normalize-space()='Search']").click() > --- to going to search box and click on it 

<  cy.xpath("//span[@role='textbox']").type('software') > ----> search on software keyword 

< cy.xpath("//button[normalize-space()='Search']").click() > ---> click on search button 

<        cy.get('[test-data="MatchedKeywords"]').invoke('text').should('contain', 'software') > -- > chexk if the results contain software keyword 


__________________________________________________________________________________________________________


Case Sensitive : 
the results in lable was small leter 

![image](https://user-images.githubusercontent.com/100388300/166173510-53fef13f-ae89-44d9-94b7-e4c68d673e74.png)
 
 
 
it('Search in the Case sensitive ',()=>{
        cy.xpath("//a[normalize-space()='Search']").click() -------------> to going to search box and click on it 
        
        cy.xpath("//span[@role='textbox']").type('Technology')-----------> search on Technology keyword 
        
        cy.xpath("//a[@class='collapsed card-link']").click() --- > select advanced option 
        
       
        cy.xpath("//label[@for='case_sensitive']").click() ------------------ > select case sensitive 
        
        cy.xpath("//button[normalize-space()='Search']").click() ------------------> click on search button 
        cy.get('[test-data="MatchedKeywords"]').invoke('text').should('contain', 'technology') ------------ > compare if the results lable have the technology keyword in small letter 
        
        
______________________________________________________________

Search With All the keywords from advanced option 



![image](https://user-images.githubusercontent.com/100388300/166173706-9a29bc5a-547f-4915-b1ec-78ab7f19679f.png)


if enter 2 keywords to search the title must have these tow keywords in lables 

we enter 'technology','software' 

lable 1 must be 'technology'and the second lable in ewch result 'software'
![image](https://user-images.githubusercontent.com/100388300/166173909-93e1c9b7-df28-42a4-9d18-08e37a18e9e8.png)


and the result must be for all results 

_______________________________________________________________________________________

Search feature translate 

![image](https://user-images.githubusercontent.com/100388300/166174069-eec76abf-1de1-4fd8-9d9f-7641675b0738.png)

we enter arabic word (برمجيات)
and translate to english .. all the results have software as a keyword
 
 
 ![image](https://user-images.githubusercontent.com/100388300/166174432-c1873056-a2ce-47fd-903b-96cee23a0395.png)


____________________________________________________________________________________

MATCHED KEYWORDS 


after enter keyword to search 
in the result we have total mached as uou see
![image](https://user-images.githubusercontent.com/100388300/166174672-98193b33-db7b-4147-93c8-bbf0a7510139.png)


we take the number we have then we click in the link of this result
and cheack inside the page the number of repeated word 
and compare with the first result 



![image](https://user-images.githubusercontent.com/100388300/166174971-4f106ba8-1952-4e45-ab39-521b94fe0b55.png)

_____________________________________________________________________

result 

![Uploading image.png…]()


