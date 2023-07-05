"use client"
import dynamic from "next/dynamic";
import React from "react";

import {
  ListItem,
  OrderedList,
  UnorderedList,
  Divider,
} from '@chakra-ui/react'

const Individual_nav = dynamic(() => import('../../components/individual_nav'))


export default function() {
  
  return(
    <>
    <title>Legal - Terms of Use</title>
    <div className="bg-white">
    <Individual_nav event_name='Terms of Use' eventlink='terms' hasImg='hidden' img='' imgLink='' links={[{
        delink: '/terms#ENG',
        name: 'English'
      }, {
        delink: '/terms#THA',
        name: 'ภาษาไทย'
      },
      ]} />
      <div>
      <div id='ENG' className="text-black bg-white p-12 md:p-32 md:mx-64 text-2xl">
        <h1 className="font-bold text-5xl my-8 md:my-16 text-center">ICT21 Website Terms of Use</h1>
       
        <h2 className="font-bold text-2xl my-6">Agreement to Terms and Conditions of Use</h2>
        <p>
        BY USING THE SITE, YOU AGREE TO THESE TERMS AND CONDITIONS OF USE AND THE PRIVACY POLICY; IF YOU DO NOT AGREE, DO NOT USE THE SITE.
        </p>
        <h2 className="font-bold text-2xl my-6">Ownership of Website</h2>
        <p>
        These Terms and Conditions of Use ("Terms of Use") apply to the ICT21 Website located at ict21.ict.mahidol.ac.th, and all associated sites linked to ict21.ict.mahidol.ac.th by Developer Team in ICT20 President Team, its subsidiaries and affiliates, including ICT21 websites around the world (collectively, the "Website"). The Website is the property of Developer Team in ICT20 President Team and Faculty of ICT, Mahidol University (collectively, “We” or “Us” or “Our”).
        </p>
        <p>
        We reserves the right, at its sole discretion, to change, modify, add or remove portions of these Terms of Use, at any time. It is your responsibility to check these Terms of Use periodically for changes. Your continued use of the Site following the posting of changes will mean that you accept and agree to the changes. As long as you comply with these Terms of Use, We grants you a personal, non-exclusive, non-transferable, limited privilege to enter and use the Site.
        </p>
        <p>
        We reserves the right, all rights made by Us or relatively to Us will be reserved including all text, graphics, user interfaces, visual interfaces, photographs, trademarks, logos, sounds, music, artwork and computer code (collectively, “Content”), including but not limited to the font, third-party tools, third-party photographs, design, structure, selection, coordination, expression, "look and feel" and arrangement of such Content, contained on the Site is owned, controlled or licensed by or to We at anywhere and anytime.
        </p>

        <h2 className="font-bold text-2xl  my-6">Your Use of Site</h2>
        <p>You may not use any Content of Website gains from any method in order to do any acts or attempt to do any acts such that impair the reputation, prejudice the rights, or disgrace to Us, Developer Team in ICT20 President Team, ICT20 President Team, anyone related to Faculty of ICT Mahidol University, Faculty of ICT Mahidol University, Mahidol University.</p>
<p>You may not use any "deep-link", "page-scrape", "robot", "spider" or other automatic device, program, algorithm or methodology, or any similar or equivalent manual process, to access, acquire, copy or monitor any portion of the Website or any Content, or in any way reproduce or circumvent the navigational structure or presentation of the Website or any Content, to obtain or attempt to obtain any materials, documents or information through any means not purposely made available through the Website. We reserves the right to bar any such activity.</p>
        <p>
        You may not attempt to gain unauthorized access to any portion or feature of the Website, or any other systems or networks connected to the Website or to any Our server, or to any of the services offered on or through the Website, by hacking, password "mining" or any other illegitimate means.
        </p>
        <p>
        You may not probe, scan or test the vulnerability of the Website or any network connected to the Website, nor breach the security or authentication measures on the Website or any network connected to the Website. You may not reverse look-up, trace or seek to trace any information on any other user of or visitor to the Website, or exploit the Website or any service or information made available or offered by or through the Website, in any way where the purpose is to reveal any information, including but not limited to personal identification or information, other than your own information, as provided for by the Website.
        </p>
        <p>
        You agree that you will not take any action that imposes an unreasonable or disproportionately large load on the infrastructure of the Website or Our systems or networks, or any systems or networks connected to the Website or to Us.
You agree not to use any device, software or routine to interfere or attempt to interfere with the proper working of the Website or any transaction being conducted on the Website, or with any other person’s use of the Website.
        </p>
        <p>
        You may not forge headers or otherwise manipulate identifiers in order to disguise the origin of any message or transmittal you send to Us on or through the Website or any service offered on or through the Website. You may not pretend that you are, or that you represent, someone else, or impersonate any other individual or entity.
        </p>
        <p>
        You may not use the Website or any Content for any purpose that is unlawful or prohibited by these Terms of Use, or to solicit the performance of any illegal activity or other activity which infringes the rights of Us or others.
        </p>

        <h2 className="font-bold text-2xl  my-6">Disclaimers</h2>
        <p>
        WE DOES NOT PROMISE THAT THE WEBSITE OR ANY CONTENT, SERVICE OR FEATURE OF THE WEBSITE WILL BE ERROR-FREE OR UNINTERRUPTED, OR THAT ANY DEFECTS WILL BE CORRECTED, OR THAT YOUR USE OF THE SITE WILL PROVIDE SPECIFIC RESULTS. THE WEBSITE AND ITS CONTENT ARE DELIVERED ON AN "AS-IS" AND "AS-AVAILABLE" BASIS. ALL INFORMATION PROVIDED ON THE WEBSITE IS SUBJECT TO CHANGE WITHOUT NOTICE. WE CANNOT ENSURE THAT ANY FILES OR OTHER DATA YOU DOWNLOAD FROM THE WEBSITE WILL BE FREE OF VIRUSES OR CONTAMINATION OR DESTRUCTIVE FEATURES. WE DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING ANY WARRANTIES OF ACCURACY, NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. WE DISCLAIMS ANY AND ALL LIABILITY FOR THE ACTS, OMISSIONS AND CONDUCT OF ANY THIRD PARTIES IN CONNECTION WITH OR RELATED TO YOUR USE OF THE WEBSITE AND/OR ANY OUR SERVICES. YOU ASSUME TOTAL RESPONSIBILITY FOR YOUR USE OF THE WEBSITE AND ANY LINKED SITES. YOUR SOLE REMEDY AGAINST US FOR DISSATISFACTION WITH THE WEBSITE OR ANY CONTENT IS TO STOP USING THE WEBSITE OR ANY SUCH CONTENT. THIS LIMITATION OF RELIEF IS A PART OF THE BARGAIN BETWEEN THE PARTIES.
        </p>

        <h1 className="font-bold text-5xl my-8 md:my-16 text-center">ICT21 Website Welcome Freshy Game Terms and Conditions of Use</h1>
        <h2 className="font-bold text-2xl  my-6">Agreement to Terms of Use</h2>
        <p>
        BY USING THE GAME, YOU AGREE TO THESE TERMS AND CONDITIONS OF USE AND PRIVACY POLICY; IF YOU DO NOT AGREE, DO NOT USE THE GAME.
        </p>

        <h2 className="font-bold text-2xl  my-6">Ownership of Game</h2>
        <p>
        These Terms and Conditions of Use (the "Terms of Use") apply to the ICT21 Website Welcome Freshy Game located at ict21.ict.mahidol.ac.th/welcome-freshy/game (collectively, the “Game") by Game Team of Developer Team in ICT20 President Team. The Game is the property of Developer Team in ICT20 President Team (collectively, “We” or “Us” or “Our”).
        </p>
        <p>
        We reserves the right, all rights made by Us or relatively to Us will be reserved including all text, graphics, user interfaces, visual interfaces, photographs, trademarks, logos, artwork and computer code (collectively, “Game Content”), including but not limited to the font, third-party tools, third-party photographs, music, sound, design, structure, selection, coordination, expression, "look and feel" and arrangement of such Content, contained on the Game is owned, controlled or licensed by or to We at anywhere and anytime.
        </p>
        <p>
        There are many parties involve with Welcome Freshy 2023 Activity including ICT20 President Team, DST2 President Team, and Staffs in ICT20 and DST2 (collectively, “Organizer”), Any person or group of person who are accepted by Organizer to be the one who decide or judge about activity(collectively, “Activity Committee”) and Faculty of ICT, Mahidol University (collectively, “The Faculty”).
        </p>

        <h2 className="font-bold text-2xl  my-6">Qualifications of applicants to participate in the Game</h2>
        <p>
        Applicants must have all these prerequisites:
        </p>
        <OrderedList className='p-6'>
           <ListItem>Those who are accepted, have a student ID, and enrolled to be a student of The Faculty.</ListItem>
           <ListItem>Those who are the first year students of The Faculty.</ListItem>
           <ListItem>Those who are voluntary and able to participate in the activity.</ListItem>
           <ListItem>Those who accept to the these terms and conditions of use and the privacy policy.</ListItem>
        </OrderedList>

        <h2 className="font-bold text-2xl  my-6">Applying to the Game</h2>
        <OrderedList className='p-6'>
           <ListItem>Applicants have to play the Game once and follow the steps to submit their student ID that is Mahidol University student ID which started with 6688 and 6687.</ListItem>
           <ListItem>Applying will be completely finished when you click submit the correct student ID.</ListItem>
           <ListItem>Applicants may play the Game more than one time but the highest score will be considered.</ListItem>
           <ListItem>Applicants can play the Game since the day the Game is released until 12 pm of August 6, 2023 or any specific date and time released from the Activity Committee. Any score that is recorded after the date and time will be not considered for the prize.</ListItem>
           <ListItem>If you do not want to be an applicant DO NOT SUBMIT YOUR SCORE.</ListItem>
           <ListItem>If you want to resign from being an applicant you can contact Organizer via natchapol.min@student.mahidol.ac.th .</ListItem>
           <ListItem>Any failures occur in game or website may cause your submission to not be recorded. It is your responsibility to check your record and contact us to protect your rights if it is incorrect.</ListItem>
           <ListItem>Every applicants will be protected under the privacy policy.</ListItem>
        </OrderedList>





        <h2 className="font-bold text-2xl my-6">Children</h2>
        <p>If you are under the age of 20 or having legal restrictions, we may collect use or disclose your personal data. We require your parents or guardian to be aware and provide consent to us or allowed by applicable laws. If we become aware that we have collected personal data from children without verification of parental consent, we take steps to remove that information from our servers.</p>
        
        <h2 className="font-bold text-2xl my-6">Storage of Data</h2>
        <p>We store your personal data as hard copy and soft copy.</p>
        <p>We store your personal data by using the following systems:</p>
        <OrderedList className='p-6'>
  <ListItem>Third-party server service providers outside of Thailand</ListItem>
</OrderedList>

        <h2 className="font-bold text-2xl my-6">Use of Data</h2>
        <p>We use the collected data for various purposes:</p>
        <UnorderedList className='p-6'>
          <ListItem>To create and manage accounts</ListItem>
          <ListItem>To share and manage information within organization</ListItem>
          <ListItem>To provide after-sales services</ListItem>
          <ListItem>To comply with our Terms and Conditions</ListItem>
          <ListItem>To comply with laws, rules, and regulatory authorities</ListItem>
        </UnorderedList>

        <h2 className="font-bold text-2xl my-6">Disclosure of Personal Data</h2>
        <p>We may disclose your personal data to the following parties in certain circumstances:</p>


        <p className='pt-6'><b>Organization</b></p>
        <p>We may disclose your personal data within our organization to provide and develop our products or services. We may combine information internally across the different products or services covered by this Privacy Policy to help us be more relevant and useful to you and others.</p>

        <h2 className="font-bold text-2xl my-6">Data Retention</h2>
        <p>We will retain your personal data for as long as necessary during the period you are a customer or under relationship with us, or for as long as necessary in connection with the purposes set out in this Privacy Policy, unless law requires or permits a longer retention period. We will erase, destroy or anonymize your personal data when it is no longer necessary or when the period lapses.</p>

        <h2 className="font-bold text-2xl my-6">Data Subject Rights</h2>
        <p>Subject to the Personal Data Protection Laws thereof, you may exercise any of these rights in the following:</p>

        <p className="pt-6"><b>Withdrawal of consent</b>: If you have given consent to us to collect, use or disclose your personal data whether before or after the effective date of the Personal Data Protection Laws, you have the right to withdraw such consent at any time throughout the period your personal data available to us, unless it is restricted by laws or you are still under beneficial contract.</p>

        <p className="pt-6"><b>Data access</b>: You have the right to access your personal data that is under our responsibility; to request us to make a copy of such data for you; and to request us to reveal as to how we obtain your personal data.</p>

        <p className="pt-6"><b>Data portability</b>: You have the right to obtain your personal data if we organize such personal data in automatic machine-readable or usable format and can be processed or disclosed by automatic means; to request us to send or transfer the personal data in such format directly to other data controllers if doable by automatic means; and to request to obtain the personal data in such format sent or transferred by us directly to other data controller unless not technically feasible.</p>

        <p className="pt-6"><b>Objection</b>: You have the right to object to collection, use or disclosure of your personal data at any time if such doing is conducted for legitimate interests of us, corporation or individual which is within your reasonable expectation; or for carrying out public tasks.</p>

        <p className="pt-6"><b>Data erasure or destruction</b>: You have the right to request us to erase, destroy or anonymize your personal data if you believe that the collection, use or disclosure of your personal data is against relevant laws; or retention of the data by us is no longer necessary in connection with related purposes under this Privacy Policy; or when you request to withdraw your consent or to object to the processing as earlier described.</p>

        <p className="pt-6"><b>Suspension</b>: You have the right to request us to suspend processing your personal data during the period where we examine your rectification or objection request; or when it is no longer necessary and we must erase or destroy your personal data pursuant to relevant laws but you instead request us to suspend the processing.</p>

        <p className="pt-6"><b>Rectification</b>: You have the right to rectify your personal data to be updated, complete and not misleading.</p>

        <p className="pt-6"><b>Complaint lodging</b>: You have the right to complain to competent authorities pursuant to relevant laws if you believe that the collection, use or disclosure of your personal data is violating or not in compliance with relevant laws.</p>


        <p className="pt-6">You can exercise these rights as the Data Subject by contacting our Data Protection Officer as mentioned below. We will notify the result of your request within 30 days upon receipt of such request. If we deny the request, we will inform you of the reason via SMS, email address, telephone, registered mail (if applicable).</p>


        <h2 className="font-bold text-2xl my-6">Advertising and Marketing</h2>

        <p>We may send certain information or newsletter for the purpose of utilizing your preference via your email. If you no longer want to receive the communications from us, you can contact us through our email.</p>

        <h2 className="font-bold text-2xl my-6">Cookies</h2>
        <p>To enrich and perfect your experience, we use cookies or similar technologies to display personalized content, appropriate advertising and store your preferences on your computer. We use cookies to identify and track visitors, their usage of our website and their website access preferences. If you do not wish to have cookies placed on your computer you should set their browsers to refuse cookies before using our website.</p>

        <h2 className="font-bold text-2xl my-6">Data Security</h2>
        <p>We endeavor to protect your personal data by establishing security measures in accordance with the principles of confidentiality, integrity, and availability to prevent loss, unauthorized or unlawful access, destruction, use, alteration, or disclosure including administrative safeguard, technical safeguard, physical safeguard and access controls.</p>

        <h2 className="font-bold text-2xl my-6">Data Breach Notification</h2>
        <p>We will notify the Office of the Personal Data Protection Committee without delay and, where feasible, within 72 hours after having become aware of it, unless such personal data breach is unlikely to result in a risk to the rights and freedoms of you. If the personal data breach is likely to result in a high risk to the rights and freedoms of you, we will also notify the personal data breach and the remedial measures to you without delay through our website, SMS, email address, telephone or registered mail (if applicable).</p>

        <h2 className="font-bold text-2xl my-6">Changes to this Privacy Policy</h2>
        <p>We may change this Privacy Policy from time to time. Any changes of this Privacy Policy, we encourage you to frequently check on our website.</p>
        <p>This Privacy Policy was last updated and effective on 29th June 2023</p>


        <h2 className="font-bold text-2xl my-6">Links to Other Sites</h2>
        <p>The purpose of this Privacy Policy is to offer products or services and use of our website. Any websites from other domains found on our site is subject to their privacy policy which is not related to us.</p>

        <h2 className="font-bold text-2xl my-6">Contact Information</h2>
        <p>If you have any questions about this Privacy Policy or would like to exercise your rights, you can contact us by using the following details:</p>

        <p className='pt-6'><b>Data Controller</b></p>
        <p>Developer Team, ICT20 President Team, Faculty of Information and Communication Technology, Mahidol University</p>

        <p>
        Faculty of ICT, Mahidol University, 999 Phutthamonthon Sai 4 Road , Salaya, Phutthamonthon, Nakhon Pathom, 73170
        </p>

        <p>poonyawatt.klu@student.mahidol.ac.th</p>
        <p>https://ict21.ict.mahidol.ac.th</p>
        <p>0881060571</p>
        <p className='pt-6'><b>Data Protection Officer</b></p>
        <p>Developer Team, ICT20 President Team, Faculty of Information and Communication Technology, Mahidol University</p>

        <p>
        Faculty of ICT, Mahidol University, 999 Phutthamonthon Sai 4 Road , Salaya, Phutthamonthon, Nakhon Pathom, 73170
        </p>

        <p>poonyawatt.klu@student.mahidol.ac.th</p>
        <p>0881060571</p>
      </div>

    </div>

    <Divider/>

    <div id='THA' className="text-black bg-white p-12 md:p-32 md:mx-64">
        <h1 className="font-bold text-5xl m-8 md:my-16 text-center">นโยบายความเป็นส่วนตัวสำหรับลูกค้า</h1>
        <p>ทีมนักพัฒนาในทีมประธานรุ่น 20 คณะเทคโนโลยีสารสนเทศและการสื่อสาร มหาวิทยาลัยมหิดล ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของคุณ โดยนโยบายความเป็นส่วนตัวฉบับนี้ได้อธิบายแนวปฏิบัติเกี่ยวกับการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล รวมถึงสิทธิต่าง ๆ ของเจ้าของข้อมูลส่วนบุคคล ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล</p>

        <h2 className="font-bold text-2xl my-6">การเก็บรวบรวมข้อมูลส่วนบุคคล</h2>
        <p>
        เราจะเก็บรวบรวมข้อมูลส่วนบุคคลที่ได้รับโดยตรงจากคุณผ่านช่องทาง ดังต่อไปนี้
        </p><UnorderedList className='p-6'>
  <ListItem>อีเมล</ListItem>
  <ListItem>รหัสนักศึกษา</ListItem>
</UnorderedList>
        <p></p>

        <h2 className="font-bold text-2xl  my-6">ประเภทข้อมูลส่วนบุคคลที่เก็บรวบรวม</h2>
        <p><b>ข้อมูลการติดต่อ</b> เช่น ที่อยู่ หมายเลขโทรศัพท์ อีเมล เป็นต้น</p>

        <h2 className="font-bold text-2xl my-6">ผู้เยาว์</h2>
        <p>หากคุณมีอายุต่ำกว่า 20 ปีหรือมีข้อจำกัดความสามารถตามกฎหมาย เราอาจเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ เราอาจจำเป็นต้องให้พ่อแม่หรือผู้ปกครองของคุณให้ความยินยอมหรือที่กฎหมายอนุญาตให้ทำได้ หากเราทราบว่ามีการเก็บรวบรวมข้อมูลส่วนบุคคลจากผู้เยาว์โดยไม่ได้รับความยินยอมจากพ่อแม่หรือผู้ปกครอง เราจะดำเนินการลบข้อมูลนั้นออกจากเซิร์ฟเวอร์ของเรา</p>

        <h2 className="font-bold text-2xl my-6">วิธีการเก็บรักษาข้อมูลส่วนบุคคล</h2>
        <p>เราจะเก็บรักษาข้อมูลส่วนบุคคลของคุณในรูปแบบเอกสารและรูปแบบอิเล็กทรอนิกส์</p>
        <p>เราเก็บรักษาข้อมูลส่วนบุคคลของคุณ ดังต่อไปนี้</p>
        <UnorderedList className='p-6'>
  <ListItem>ผู้ให้บริการเซิร์ฟเวอร์ในต่างประเทศ</ListItem>
</UnorderedList>

        <h2 className="font-bold text-2xl my-6">การประมวลผลข้อมูลส่วนบุคคล</h2>
        <p>เราจะเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้</p>
        <UnorderedList className='p-6'>
          <ListItem>เพื่อสร้างและจัดการบัญชีผู้ใช้งาน</ListItem>
          <ListItem>เพื่อการบริหารจัดการภายในบริษัท</ListItem>
          <ListItem>เพื่อการบริการหลังการขาย</ListItem>
          <ListItem>เพื่อปฏิบัติตามข้อตกลงและเงื่อนไข (Terms and Conditions)</ListItem>
          <ListItem>เพื่อปฏิบัติตามกฎหมายและกฎระเบียบของหน่วยงานราชการ</ListItem>
        </UnorderedList>

        <h2 className="font-bold text-2xl my-6">การเปิดเผยข้อมูลส่วนบุคคล</h2>
        <p>เราอาจเปิดเผยข้อมูลส่วนบุคคลของคุณให้แก่ผู้อื่นภายใต้ความยินยอมของคุณหรือที่กฎหมายอนุญาตให้เปิดเผยได้ ดังต่อไปนี้</p>

        <p className='pt-6'><b>การบริหารจัดการภายในองค์กร</b></p>
        <p>เราอาจเปิดเผยข้อมูลส่วนบุคคลของคุณภายในบริษัทเท่าที่จำเป็นเพื่อปรับปรุงและพัฒนาสินค้าหรือบริการของเรา เราอาจรวบรวมข้อมูลภายในสำหรับสินค้าหรือบริการต่าง ๆ ภายใต้นโยบายนี้เพื่อประโยชน์ของคุณและผู้อื่นมากขึ้น</p>

        <h2 className="font-bold text-2xl my-6">ระยะเวลาจัดเก็บข้อมูลส่วนบุคคล</h2>
        <p>เราจะเก็บรักษาข้อมูลส่วนบุคคลของคุณไว้ตามระยะเวลาที่จำเป็นในระหว่างที่คุณเป็นลูกค้าหรือมีความสัมพันธ์อยู่กับเราหรือตลอดระยะเวลาที่จำเป็นเพื่อให้บรรลุวัตถุประสงค์ที่เกี่ยวข้องกับนโยบายฉบับนี้ ซึ่งอาจจำเป็นต้องเก็บรักษาไว้ต่อไปภายหลังจากนั้น หากมีกฎหมายกำหนดไว้ เราจะลบ ทำลาย หรือทำให้เป็นข้อมูลที่ไม่สามารถระบุตัวตนของคุณได้ เมื่อหมดความจำเป็นหรือสิ้นสุดระยะเวลาดังกล่าว</p>

        <h2 className="font-bold text-2xl my-6">สิทธิของเจ้าของข้อมูลส่วนบุคคล</h2>
        <p>ภายใต้กฎหมายคุ้มครองข้อมูลส่วนบุคคล  คุณมีสิทธิในการดำเนินการดังต่อไปนี้</p>

        <p className='pt-6'><b>สิทธิขอถอนความยินยอม (right to withdraw consent)</b> หากคุณได้ให้ความยินยอม เราจะเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ ไม่ว่าจะเป็นความยินยอมที่คุณให้ไว้ก่อนวันที่กฎหมายคุ้มครองข้อมูลส่วนบุคคลใช้บังคับหรือหลังจากนั้น คุณมีสิทธิที่จะถอนความยินยอมเมื่อใดก็ได้ตลอดเวลา</p>

        <p className='pt-6'><b>สิทธิขอเข้าถึงข้อมูล (right to access)</b> คุณมีสิทธิขอเข้าถึงข้อมูลส่วนบุคคลของคุณที่อยู่ในความรับผิดชอบของเราและขอให้เราทำสำเนาข้อมูลดังกล่าวให้แก่คุณ  รวมถึงขอให้เราเปิดเผยว่าเราได้ข้อมูลส่วนบุคคลของคุณมาได้อย่างไร</p>

        <p className='pt-6'><b>สิทธิขอถ่ายโอนข้อมูล (right to data portability)</b> คุณมีสิทธิขอรับข้อมูลส่วนบุคคลของคุณในกรณีที่เราได้จัดทำข้อมูลส่วนบุคคลนั้นอยู่ในรูปแบบให้สามารถอ่านหรือใช้งานได้ด้วยเครื่องมือหรืออุปกรณ์ที่ทำงานได้โดยอัตโนมัติและสามารถใช้หรือเปิดเผยข้อมูลส่วนบุคคลได้ด้วยวิธีการอัตโนมัติ รวมทั้งมีสิทธิขอให้เราส่งหรือโอนข้อมูลส่วนบุคคลในรูปแบบดังกล่าวไปยังผู้ควบคุมข้อมูลส่วนบุคคลอื่นเมื่อสามารถทำได้ด้วยวิธีการอัตโนมัติ และมีสิทธิขอรับข้อมูลส่วนบุคคลที่เราส่งหรือโอนข้อมูลส่วนบุคคลในรูปแบบดังกล่าวไปยังผู้ควบคุมข้อมูลส่วนบุคคลอื่นโดยตรง เว้นแต่ไม่สามารถดำเนินการได้เพราะเหตุทางเทคนิค</p>

        <p className='pt-6'><b>สิทธิขอคัดค้าน (right to object)</b>  คุณมีสิทธิขอคัดค้านการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณในเวลาใดก็ได้ หากการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณที่ทำขึ้นเพื่อการดำเนินงานที่จำเป็นภายใต้ประโยชน์โดยชอบด้วยกฎหมายของเราหรือของบุคคลหรือนิติบุคคลอื่น โดยไม่เกินขอบเขตที่คุณสามารถคาดหมายได้อย่างสมเหตุสมผลหรือเพื่อดำเนินการตามภารกิจเพื่อสาธารณประโยชน์</p>

        <p className='pt-6'><b>สิทธิขอให้ลบหรือทำลายข้อมูล (right to erasure/destruction)</b> คุณมีสิทธิขอลบหรือทำลายข้อมูลส่วนบุคคลของคุณหรือทำให้ข้อมูลส่วนบุคคลเป็นข้อมูลที่ไม่สามารถระบุตัวคุณได้ หากคุณเชื่อว่าข้อมูลส่วนบุคคลของคุณถูกเก็บรวบรวม ใช้ หรือเปิดเผยโดยไม่ชอบด้วยกฎหมายที่เกี่ยวข้องหรือเห็นว่าเราหมดความจำเป็นในการเก็บรักษาไว้ตามวัตถุประสงค์ที่เกี่ยวข้องในนโยบายฉบับนี้ หรือเมื่อคุณได้ใช้สิทธิขอถอนความยินยอมหรือใช้สิทธิขอคัดค้านตามที่แจ้งไว้ข้างต้นแล้ว</p>

        <p className='pt-6'><b>สิทธิขอให้ระงับการใช้ข้อมูล (right to restriction of processing)</b> คุณมีสิทธิขอให้ระงับการใช้ข้อมูลส่วนบุคคลชั่วคราวในกรณีที่เราอยู่ระหว่างตรวจสอบตามคำร้องขอใช้สิทธิขอแก้ไขข้อมูลส่วนบุคคลหรือขอคัดค้านของคุณหรือกรณีอื่นใดที่เราหมดความจำเป็นและต้องลบหรือทำลายข้อมูลส่วนบุคคลของคุณตามกฎหมายที่เกี่ยวข้องแต่คุณขอให้เราระงับการใช้แทน</p>

        <p className='pt-6'><b>สิทธิขอให้แก้ไขข้อมูล (right to rectification)</b> คุณมีสิทธิขอแก้ไขข้อมูลส่วนบุคคลของคุณให้ถูกต้อง เป็นปัจจุบัน สมบูรณ์ และไม่ก่อให้เกิดความเข้าใจผิด</p>

        <p className='pt-6'><b>สิทธิร้องเรียน (right to lodge a complaint)</b> คุณมีสิทธิร้องเรียนต่อผู้มีอำนาจตามกฎหมายที่เกี่ยวข้อง หากคุณเชื่อว่าการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ เป็นการกระทำในลักษณะที่ฝ่าฝืนหรือไม่ปฏิบัติตามกฎหมายที่เกี่ยวข้อง</p>


        <p className='pt-6'>คุณสามารถใช้สิทธิของคุณในฐานะเจ้าของข้อมูลส่วนบุคคลข้างต้นได้ โดยติดต่อมาที่เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลของเราตามรายละเอียดท้ายนโยบายนี้ เราจะแจ้งผลการดำเนินการภายในระยะเวลา 30 วัน นับแต่วันที่เราได้รับคำขอใช้สิทธิจากคุณ ตามแบบฟอร์มหรือวิธีการที่เรากำหนด ทั้งนี้ หากเราปฏิเสธคำขอเราจะแจ้งเหตุผลของการปฏิเสธให้คุณทราบผ่านช่องทางต่าง ๆ เช่น ข้อความ (SMS) อีเมล โทรศัพท์ จดหมาย เป็นต้น</p>


        <h2 className="font-bold text-2xl my-6">การโฆษณาและการตลาด</h2>

        <p>เราอาจส่งข้อมูลหรือจดหมายข่าวไปยังอีเมลของคุณ โดยมีวัตถุประสงค์เพื่อเสนอสิ่งที่น่าสนกับคุณ หากคุณไม่ต้องการรับการติดต่อสื่อสารจากเราผ่านทางอีเมลอีกต่อไป คุณสามารถติดต่อมายังอีเมลของเราได้</p>

        <h2 className="font-bold text-2xl my-6">เทคโนโลยีติดตามตัวบุคคล (Cookies)</h2>
        <p>เพื่อเพิ่มประสบการณ์การใช้งานของคุณให้สมบูรณ์และมีประสิทธิภาพมากขึ้น เราใช้คุกกี้ (Cookies)หรือเทคโนโลยีที่คล้ายคลึงกัน เพื่อพัฒนาการเข้าถึงสินค้าหรือบริการ โฆษณาที่เหมาะสม และติดตามการใช้งานของคุณ เราใช้คุกกี้เพื่อระบุและติดตามผู้ใช้งานเว็บไซต์และการเข้าถึงเว็บไซต์ของเรา หากคุณไม่ต้องการให้มีคุกกี้ไว้ในคอมพิวเตอร์ของคุณ คุณสามารถตั้งค่าบราวเซอร์เพื่อปฏิเสธคุกกี้ก่อนที่จะใช้เว็บไซต์ของเราได้</p>

        <h2 className="font-bold text-2xl my-6">การรักษาความมั่งคงปลอดภัยของข้อมูลส่วนบุคคล</h2>
        <p>เราจะรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคลของคุณไว้ตามหลักการ การรักษาความลับ (confidentiality) ความถูกต้องครบถ้วน (integrity) และสภาพพร้อมใช้งาน (availability) ทั้งนี้ เพื่อป้องกันการสูญหาย เข้าถึง ใช้ เปลี่ยนแปลง แก้ไข หรือเปิดเผย นอกจากนี้เราจะจัดให้มีมาตรการรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคล ซึ่งครอบคลุมถึงมาตรการป้องกันด้านการบริหารจัดการ (administrative safeguard) มาตรการป้องกันด้านเทคนิค (technical safeguard) และมาตรการป้องกันทางกายภาพ (physical safeguard) ในเรื่องการเข้าถึงหรือควบคุมการใช้งานข้อมูลส่วนบุคคล (access control)</p>

        <h2 className="font-bold text-2xl my-6">การแจ้งเหตุละเมิดข้อมูลส่วนบุคคล</h2>
        <p>ในกรณีที่มีเหตุละเมิดข้อมูลส่วนบุคคลของคุณเกิดขึ้น เราจะแจ้งให้สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคลทราบโดยไม่ชักช้าภายใน 72 ชั่วโมง นับแต่ทราบเหตุเท่าที่สามารถกระทำได้ ในกรณีที่การละเมิดมีความเสี่ยงสูงที่จะมีผลกระทบต่อสิทธิและเสรีภาพของคุณ เราจะแจ้งการละเมิดให้คุณทราบพร้อมกับแนวทางการเยียวยาโดยไม่ชักช้าผ่านช่องทางต่าง ๆ เช่น  เว็บไซต์ ข้อความ (SMS) อีเมล โทรศัพท์ จดหมาย เป็นต้น</p>

        <h2 className="font-bold text-2xl my-6">การแก้ไขเปลี่ยนแปลงนโยบายความเป็นส่วนตัว</h2>
        <p>เราอาจแก้ไขเปลี่ยนแปลงนโยบายนี้เป็นครั้งคราว โดยคุณสามารถทราบข้อกำหนดและเงื่อนไขนโยบายที่มีการแก้ไขเปลี่ยนแปลงนี้ได้ผ่านทางเว็บไซต์ของเรา</p>
        <p>นโยบายนี้แก้ไขล่าสุดและมีผลใช้บังคับตั้งแต่วันที่ 29 มิถุนายน 2566</p>

        <h2 className="font-bold text-2xl my-6">นโยบายความเป็นส่วนตัวของเว็บไซต์อื่น</h2>
        <p>นโยบายความเป็นส่วนตัวฉบับนี้ใช้สำหรับการเสนอสินค้า บริการ และการใช้งานบนเว็บไซต์สำหรับลูกค้าของเราเท่านั้น หากคุณเข้าชมเว็บไซต์อื่นแม้จะผ่านช่องทางเว็บไซต์ของเรา การคุ้มครองข้อมูลส่วนบุคคลต่าง ๆ จะเป็นไปตามนโยบายความเป็นส่วนตัวของเว็บไซต์นั้น ซึ่งเราไม่มีส่วนเกี่ยวข้องด้วย</p>

        <h2 className="font-bold text-2xl my-6">รายละเอียดการติดต่อ</h2>
        <p>หากคุณต้องการสอบถามข้อมูลเกี่ยวกับนโยบายความเป็นส่วนตัวฉบับนี้ รวมถึงการขอใช้สิทธิต่าง ๆ คุณสามารถติดต่อเราหรือเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลของเราได้ ดังนี้</p>

        <p className='pt-6'><b>ผู้ควบคุมข้อมูลส่วนบุคคล</b></p>
        <p>ทีมนักพัฒนาในทีมประธานรุ่น 20 คณะเทคโนโลยีสารสนเทศและการสื่อสาร มหาวิทยาลัยมหิดล</p>

        <p>
        คณะเทคโนโลยีสารสนเทศและการสื่อสาร มหาวิทยาลัยมหิดล 999 ถนนพุทธมณฑลสาย 4 ศาลายา พุทธมณฑล นครปฐม 73170
        </p>

        <p>อีเมล poonyawatt.klu@student.mahidol.ac.th</p>
        <p>เว็บไซต์ https://ict21.ict.mahidol.ac.th</p>
        <p>หมายเลขโทรศัพท์ 0881060571</p>

        <p className='pt-6'><b>เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล</b></p>
        <p>ทีมนักพัฒนาในทีมประธานรุ่น 20 คณะเทคโนโลยีสารสนเทศและการสื่อสาร มหาวิทยาลัยมหิดล</p>

        <p>
        คณะเทคโนโลยีสารสนเทศและการสื่อสาร มหาวิทยาลัยมหิดล 999 ถนนพุทธมณฑลสาย 4 ศาลายา พุทธมณฑล นครปฐม 73170
        </p>

        <p>อีเมล poonyawatt.klu@student.mahidol.ac.th</p>
        <p>หมายเลขโทรศัพท์ 0881060571</p>

      </div>
      </div>
    </>
  )
  
  }