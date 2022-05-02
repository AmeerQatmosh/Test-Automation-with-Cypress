# Test-Automation-with-Cypress

Automation Testing in Cypress 

WHATS CYPRESS AND AUTOMATION TESTING 



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

![Uploading image.png…]()


<         cy.xpath("//a[normalize-space()='Search']").click() > --- to going to search box and click on it 

<  cy.xpath("//span[@role='textbox']").type('software') > ----> search on software keyword 

< cy.xpath("//button[normalize-space()='Search']").click() > ---> click on search button 

<        cy.get('[test-data="MatchedKeywords"]').invoke('text').should('contain', 'software') > -- > chexk if the results contain software keyword 





