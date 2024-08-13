import { useState } from "react";
const BookStock = [
  {
      Code: '001',
      Title: 'จิตวิทยาสายดาร์ก',
      Cover: 'https://storage.naiin.com/system/application/bookstore/resource/product/202304/577274/1000260516_front_XXL.jpg?imgname=%E0%B8%88%E0%B8%B4%E0%B8%95%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%A2%E0%B8%94%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%81',
      Description: 'Dr. Hiro  เคยเป็นนักขายที่ล้มเหลว  ขายอะไรก็ไม่มีใครซื้อแต่แล้ววันหนึ่งขณะกำลังดูข่าว  เขาก็นึกขึ้นได้ว่า“ในโลกเรามีลัทธิที่ขายของไม่น่าเชื่อถือได้ในราคาแพงลิ่วแถมยังทำให้สาวกยอมทุ่มบริจาคทรัพย์สินจนหมดตัวแล้วทำไมผมถึงขายไม่ออกล่ะ?”เขาจึงเริ่มศึกษาเทคนิคเหล่านั้นอย่างจริงจังอ่านหนังสือทุกเล่มเกี่ยวกับการล้างสมองที่มีในท้องตลาดแล้วเอาไปปรับใช้จนกลายเป็นนักขายระดับท็อปของญี่ปุ่นนั่นคือที่มาของ  “จิตวิทยาสายดาร์ก”พบกับเทคนิคทางจิตวิทยาที่ช่วยให้คุณใช้คำพูดควบคุมจิตใจคนทำให้พวกเขาคล้อยตามและทำอย่างที่คุณต้องการโดยไม่รู้ตัว',
      Category: 'จิตวิทยา การพัฒนาตัวเอง',
      Author: 'Dr.Hiro',
      Publishing: '01/03/2024',
      Price: 225.00,
      Bestsellers: true,
      Suggestions: false
  },
  {
      Code: '002',
      Title: 'Why Has Nobody Told Me This Before?',
      Cover: 'https://storage.naiin.com/system/application/bookstore/resource/product/202401/600920/1000268401_front_XXL.jpg?imgname=Why-Has-Nobody-Told-Me-This-Before?-%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%AA%E0%B8%B3%E0%B8%84%E0%B8%B1%E0%B8%8D%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%84%E0%B8%A7%E0%B8%A3%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%81%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95%E0%B8%88%E0%B8%B0%E0%B8%AA%E0%B8%AD%E0%B8%99%E0%B8%84%E0%B8%B8%E0%B8%93',
      Description: 'มองโลกผ่านมุมจิตวิทยาเพื่อตั้งรับและก้าวผ่านปัญหาในวันที่ชีวิตโยนบททดสอบอันหนักหนามาให้หนังสือเล่มนี้ได้รวบรวบชุดเครื่องมือที่ใช้กันโดยจิตแพทย์และนักจิตบำบัดแต่มันไม่ใช่ทักษะสำหรับผู้ป่วยเท่านั้น  ทว่าเป็นทักษะชีวิตที่จะช่วยนำทางพวกเราทุกคนให้ก้าวผ่านช่วงเวลาอันยากลำบาก เมื่อเราเข้าใจกลไกการทำงานของจิตใจและเรียนรู้วิธีที่เหมาะสมในการจัดการกับอารมณ์ความรู้สึก  เราไม่เพียงสร้างเบาะไว้รองรับจิตใจในวันที่พายุถาโถมเข้าใส่  แต่ยังสามารถเติบโตและรับมือกับโลกได้ดีขึ้นในทุก ๆ วัน',
      Category: 'จิตวิทยา การพัฒนาตัวเอง',
      Author: 'Dr.Julie Smith',
      Publishing: '01/03/2024',
      Price: 292.50,
      Bestsellers: true,
      Suggestions: false
  },
  {
      Code: '003',
      Title: 'BLUE GIANT SUPREME เล่ม 1',
      Cover: 'https://storage.naiin.com/system/application/bookstore/resource/product/202407/618980/1000274269_front_XXL.jpg?imgname=BLUE-GIANT-SUPREME-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-1',
      Description: 'ถึงอย่างไรก็ต้องไปต่อ ได มิยาโมโตะเริ่มต้นการเดินทางไปยุโรปด้วยตัวคนเดียวแผ่นดินที่เขาก้าวเท้าลงเหยียบคือ เมืองมิวนิก ประเทศเยอรมนี ไม่มีคนรู้จัก ไม่มีคอนเน็คชั่น ไม่รู้ภาษาเยอรมัน มีเพียงความตั้งใจอันแน่วแน่กับเทเนอร์แซ็กโซโฟนตัวเดียวเท่านั้น "วันหนึ่งฉันจะต้องเป็นนักถนตรีแซกโซโฟนมือหนึ่งของโลก...!!!"ความท้าทายเริ่มต้นตั้งแต่การหาที่ฝึกซ้อมเสียงแซกโซโฟนที่ไม่เหมือนใครของได จะได้ดังกระหึ่ม ณ ยุโรปหรือไม่!!?',
      Category: 'การ์ตูนญี่ปุ่น มังงะ การ์ตูนไทย',
      Author: 'ISHIZUKA SHINICHI',
      Publishing: '05/03/2023',
      Price: 157.50,
      Bestsellers: false,
      Suggestions: true
  },
  {
      Code: '004',
      Title: 'SAKAMOTO DAYS เล่ม 14',
      Cover: 'https://storage.naiin.com/system/application/bookstore/resource/product/202406/615897/1000273138_front_XXL.jpg?imgname=SAKAMOTO-DAYS-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1--14',
      Description: '  ชาคาโมโตะ นางโมะ อาคาโอะ และอุซีกีในวัยเยาว์ต้องร่วมมือกับ ORDER คินดากะเพื่อช่วยคุ้มกันบุคคลสำคัญ!! เมื่อพวกพ้องต้องเผชิญกับวิกฤตจากการโจมตีของผู้ใช้พิษ ชาคาโมโตะจะทำอย่างไร!?ส่วนอูชีกิก็กำลังหนักใจกับการกิจลับสังหารคินดากะ...ได้เวลาที่ฟันเฟืองแห่งโศกนาฎกรรมจะเริ่มหมุนแล้ว!!',
      Category: 'การ์ตูนญี่ปุ่น มังงะ การ์ตูนไทย',
      Author: 'YUTO SUZUKI',
      Publishing: '25/07/2024',
      Price: 118.75,
      Bestsellers: false,
      Suggestions: true
  },
  {
      Code: '005',
      Title: 'มหาศึกคนชนเทพ เล่ม 21 (Mg)',
      Cover: 'https://storage.naiin.com/system/application/bookstore/resource/product/202407/617113/1000273445_front_XXL.jpg?imgname=%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%84%E0%B8%99%E0%B8%8A%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%9E-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1--21-(Mg)',
      Description: 'การต่อสู้อันลุ้นระทึกระหว่างกษัตริย์ลีโอนิดัส จอมขบถแห่งสปาร์ตา vsสุริยเทพอพอลโล รู้ผลแพ้ชนะในที่สุด!!และแล้ว...ก็มาถึงศึกรอบที่ 10 ระหว่างโอคิตะ โซจิ หัวหน้าหน่วยที่ 1 แห่งชินเซ็นกุมิ vs ซุซาโนโอะโนะมิโคโตะ เทพดาบองค์แรกแห่งญี่ปุ่นยามเมื่อผู้บรรลุวิชาดาบประจันหน้ากันการดวลเดือดที่สะเทือนถึงสวรรค์จึงบังเกิด!!‘จอมเชือดคน’ แห่งมนุษยชาติ vs ‘จอมเชือดเทพ’ แห่งสวรรค์!!!',
      Category: 'การ์ตูนญี่ปุ่น มังงะ การ์ตูนไทย',
      Author: 'อาจิจิกะ',
      Publishing: '25/07/2024',
      Price: 157.50,
      Bestsellers: false,
      Suggestions: true
  }
];
function CheckBestsell ({Bestsellers}){
    if(Bestsellers)
        return (
       <>
         <h1 className="text-red-900 font-bold text-xl mb-2">ขายดี!!!!!</h1> 
         </>
       );
    else
        return(
       <>
           
         </>     
       ); 
  }
  function CheckSuggestions ({Suggestions}){
    if(Suggestions)
        return (
       <>
          <h1 className="text-red-900 font-bold text-xl mb-2">แนะนำ!!!!!</h1> 
         </>
       );
    else
        return(
       <>
           
         </>     
       ); 
  }
function Library ({Code,Title,Cover,Description,Category,Author,Publishing,Price,Bestsellers,Suggestions}:{
Code:string,Title:string,Cover:string,Description:string,Category:string,Author:string,Publishing:string,Price:number,Bestsellers:boolean,Suggestions:boolean}){
  //CSS
  const BorderStyle = {
    border: "solid 3px",
    borderColor: "green",
    margin:"30px 0px"
    };
  return(
        <div style={BorderStyle}>
        <div className="text-gray-900 font-bold text-xl mb-2">รหัส :{Code}</div>
        <h1 className="text-gray-900 font-bold text-xl mb-2">ชื่อหนังสือ :{Title}</h1>
        <img className="w-100 h-300" src={Cover} title={Title}/>
        <h1 className="text-gray-900 font-bold text-xl mb-2">คำอธิบาย :</h1>
        <p className="text-gray-700 text-base">{Description}</p>
        <h4 className="text-gray-900 font-bold text-xl mb-2">หมวด :{Category}</h4>
        <h4 className="text-gray-900 font-bold text-xl mb-2">ผู้แต่ง :{Author}</h4>
        <h4 className="text-gray-900 font-bold text-xl mb-2">จำหน่ายวันที่ :{Publishing}</h4>
        <h2 className="text-green-900 font-bold text-xl mb-2">ราคา :{Price} บาท</h2>
        <p>
            <CheckBestsell Bestsellers={Bestsellers} />
        </p>
        <p>
            <CheckSuggestions Suggestions={Suggestions} />
        </p>
      </div>
    )
}

export default function ToDoLists(){
  const enrBook = BookStock.filter(Book =>
    Book.Bestsellers===true||
    Book.Bestsellers===false
  );
  const Bookitems = enrBook.map(Book =>
  <Library Code={Book.Code} Title={Book.Title} Cover={Book.Cover} Description={Book.Description} Category={Book.Category} Author={Book.Author} Publishing={Book.Publishing} Price={Book.Price}
  Bestsellers={Book.Bestsellers} Suggestions={Book.Suggestions}/>
  );
 
  return(
      <div className="p-5  bg-green-100">
      <h1 className="text-xl font-bold">Booklists:</h1>
      <ul>{Bookitems}</ul>
      </div>
  )
 }