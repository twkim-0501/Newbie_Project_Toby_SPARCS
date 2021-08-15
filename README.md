# Newbie_Project_Toby(Outfit Manager App)
  This project is my first development project in my life.
This app takes care of the clothes you own and reduces the stress of deciding what to wear.
It consists of a closet tab where you can store your clothes, a calendar tab where you can store clothes to wear by day of the week, and a main tab that tells you what clothes to wear today.

> developer: TaewooKim(Me)
>
> Skill : React.js / Node.js(Express), MongoDB

<img src="https://user-images.githubusercontent.com/64680507/129444718-2d7cf00b-edb8-4179-868e-966ee38d596e.PNG" height="250">

---

## Function

### Closet
> In the Closet tab, you can save your clothes by category.
  
<p float="left">
  <img src="https://user-images.githubusercontent.com/64680507/129444972-13a2a552-7a06-4e41-9308-a8f8794c88f5.gif" height="250">
  <img src="https://user-images.githubusercontent.com/64680507/129444777-5046f3f1-4517-411e-a346-bba72b0ed2b5.gif" height="250">
</p>

+ You can save clothes in the form of text, and you can delete and wish check by hovering.
+ Clothing with wish checks can be viewed individually and collectively by pressing the blue light bulb and individually highlighted in blue.
  + It is a function that allows you to view only the clothes you like separately.

### Outfit Calendar
> In Outfit Calendar, you can save combinations of clothes to be worn later by day of the week.
> This will reduce the stress you need when choosing clothes to wear later.

<p float="left">
  <img src="https://user-images.githubusercontent.com/64680507/129445036-939808f2-a071-4850-a1ce-4cc55169c623.PNG" height="250">
  <img src="https://user-images.githubusercontent.com/64680507/129445038-7f2fa122-3cbb-4c74-8f90-ace6bf1e9fd1.gif" height="250">
</p>

+ You can save clothes combinations on any day of the week using the multi checkbox at the top.
+ The stored clothes combinations are stacked in the day box in a form similar to a todo list.
+ If you hover over the clothes combination, the delete button will be activated, and if you press it, you can delete it.
+ The top clothes combination in the day box takes priority, and it is displayed as a recommended outfit on the day of the week on the main screen.
  + *Please refer to the gif file of the Main Tab*

### Main
> The Main Tab recommends today's outfits based on the outfits saved in the Outfit Calendar.

<p float="left">
  <img src="https://user-images.githubusercontent.com/64680507/129445040-110d6354-e141-4214-95ef-0eeb8ecbc522.PNG" height="250">
  <img src="https://user-images.githubusercontent.com/64680507/129445043-11fc101d-2a6f-4be1-bd93-6c26354ac84d.gif" height="250">
</p>

+ This tab displays the day of the week and recommended outfits and dates.

---

### DB

+ There are two schemas used in DB, Calendar and Closet.
+ Calendar Schema was used to store the clothes combination for each day of the week.
+ Closet Schema was used to store user's clothes by clothes category.



## Contacts
Contributors
- 김태우, rlaxodntttt@kaist.ac.kr
