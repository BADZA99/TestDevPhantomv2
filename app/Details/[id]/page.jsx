// pages/Details.js
"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { MdOutlineCampaign, MdGroups2, MdOutlineDashboard, MdOutlineEventNote, MdSettings, } from 'react-icons/md';
import Image from 'next/image'
import { GrCycle } from 'react-icons/gr';
import userImg from '../../../public/UserImg.jpg'
import Link from 'next/link';

export default function Details({ params }) {
  const router = useRouter();
  const id = params.id;

  const [item, setItem] = useState({});

  // Utilisez l'ID pour appeler l'API et obtenir les données
  useEffect(() => {
    // Vous devez remplacer l'URL de l'API par la vôtre
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((data) => setItem(data));
  }, [id]);
  // console.log(item)

  return (
    <div className=" relative w-[1440px] h-[1024px] bg-[#F2F2F2] border-red-300 m-auto ">
      {/* topbar */}
      <div className=" absolute w-[1190px] h-[70px] left-[250px] bg-white flex items-center">
        {/* photo and username */}
        <div className="w-[144px] h-[40px] top-[15px] left-[1021px] ml-auto">
          <div className="flex items-center justify-center text-[#191F36]">
            <span className="font-quicksand text-18 font-medium leading-23 text-center p-1">Jean david</span>
            <Image src={userImg} className="rounded-full"
              width={40} height={40} alt="user image" />
          </div>
        </div>
      </div>
      {/* sidebar */}
      <div className="w-[250px] h-[1024px] pt-[35px] pr-[0px] pb-[35px] pl-[0px]  justify-between bg-[#FFFFFE] ">
        {/* logo and text */}
           <div className="w-[120px] h-[125px]  flex flex-col mx-auto mt-3 items-center justify-center">
                    <span className="w-[120px] h-[100px] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="83" height="90" viewBox="0 0 83 90" fill="none">
                            <path d="M78.8083 1.43833C75.2337 -0.173895 71.0153 1.38553 69.3862 4.92678L41.6466 65.1739L18.4953 14.8852H41.6466C45.5769 14.8852 48.7602 11.7347 48.7602 7.84497C48.7602 3.95522 45.5769 0.804703 41.6466 0.804703H7.43711C7.41221 0.804703 7.39087 0.808223 7.36597 0.808223C7.20947 0.808223 7.05297 0.818783 6.89647 0.832864C6.81467 0.839904 6.7293 0.843424 6.6475 0.850465C6.51234 0.864545 6.37718 0.889186 6.24202 0.910307C6.13887 0.927908 6.03217 0.941988 5.92902 0.966629C5.82587 0.98775 5.72272 1.01943 5.62313 1.04407C5.49153 1.07927 5.35993 1.11447 5.22832 1.1532C5.15007 1.17784 5.07182 1.20952 4.99357 1.23768C4.84419 1.29048 4.69836 1.3468 4.55609 1.41017C4.53475 1.42073 4.50985 1.42777 4.48851 1.43481C4.43515 1.45945 4.38536 1.49113 4.33201 1.51577C4.19685 1.58265 4.06169 1.64602 3.93364 1.71994C3.84472 1.76922 3.7558 1.82554 3.67044 1.87834C3.56729 1.94171 3.46058 2.00859 3.36099 2.07899C3.25785 2.14939 3.16181 2.22332 3.06578 2.29724C2.98397 2.3606 2.90572 2.42045 2.82747 2.48733C2.72432 2.57533 2.62473 2.66333 2.5287 2.75486C2.46112 2.81822 2.39354 2.88158 2.32952 2.94847C2.23704 3.04351 2.14812 3.14207 2.0592 3.24416C1.99517 3.31808 1.93115 3.392 1.87069 3.46945C1.79244 3.56449 1.7213 3.66305 1.64661 3.76514C1.58258 3.85666 1.51856 3.94466 1.4581 4.03971C1.39763 4.13123 1.34428 4.22275 1.28737 4.31428C1.22334 4.4234 1.16288 4.53253 1.10597 4.64165C1.06329 4.72613 1.02061 4.81062 0.981481 4.89862C0.924572 5.02183 0.87122 5.14503 0.821424 5.27175C0.789413 5.35624 0.757401 5.44072 0.728947 5.5252C0.682708 5.65193 0.640026 5.77865 0.604458 5.91242C0.576003 6.00746 0.554663 6.10251 0.529765 6.20107C0.50131 6.32076 0.472856 6.44044 0.451515 6.56364C0.430174 6.68333 0.41239 6.80301 0.394606 6.9227C0.380379 7.02478 0.366151 7.12687 0.359038 7.22895C0.344811 7.3768 0.341253 7.52464 0.337696 7.67249C0.337696 7.73233 0.327026 7.78865 0.327026 7.84849C0.327026 7.87314 0.330583 7.89426 0.330583 7.9189C0.330583 8.07378 0.341254 8.22867 0.355481 8.38355C0.362595 8.46452 0.366151 8.549 0.373265 8.62996C0.387492 8.76373 0.41239 8.89749 0.433731 9.03126C0.451515 9.13334 0.465742 9.23895 0.49064 9.33751C0.511981 9.4396 0.543993 9.54168 0.56889 9.64376C0.604458 9.77401 0.63647 9.90425 0.679151 10.031C0.704049 10.1084 0.736061 10.1859 0.764515 10.2668C0.817867 10.4112 0.874776 10.5555 0.935242 10.6963C0.945913 10.7174 0.953026 10.742 0.963697 10.7632L35.1768 85.0732C35.191 85.1084 35.2123 85.1401 35.2265 85.1718C35.255 85.2316 35.2835 85.288 35.3155 85.3478C35.383 85.4816 35.4542 85.6083 35.5289 85.735C35.5609 85.7878 35.5929 85.8441 35.6249 85.8969C35.7281 86.0589 35.8348 86.2173 35.9486 86.3686C35.9593 86.3792 35.9664 86.3933 35.9735 86.4038C36.1015 86.5693 36.2331 86.7277 36.3754 86.8791C36.411 86.9178 36.4501 86.9565 36.4892 86.9952C36.5995 87.1114 36.7133 87.2205 36.8307 87.3296C36.8734 87.3684 36.916 87.4071 36.9587 87.4458C37.1152 87.5831 37.2753 87.7133 37.4424 87.833C37.4602 87.8471 37.478 87.8577 37.4958 87.8682C37.6523 87.9809 37.8124 88.0829 37.9795 88.1815C38.0293 88.2097 38.0791 88.2378 38.1289 88.266C38.2996 88.361 38.4739 88.4526 38.6518 88.5335C38.666 88.5406 38.6802 88.5511 38.698 88.5582C38.7051 88.5617 38.7087 88.5617 38.7158 88.5652C38.7407 88.5758 38.7691 88.5863 38.794 88.5969C38.9114 88.6462 39.0252 88.6954 39.1426 88.7377C39.1817 88.7518 39.2209 88.7658 39.2635 88.7799C39.3774 88.8222 39.4947 88.8574 39.6085 88.8926C39.6406 88.9031 39.669 88.9102 39.701 88.9207C40.0069 89.0052 40.3128 89.0721 40.6222 89.1179C40.6471 89.1214 40.672 89.1249 40.6969 89.1284C40.8285 89.146 40.9601 89.1601 41.0917 89.1707C41.1238 89.1742 41.1558 89.1777 41.1878 89.1777C41.3407 89.1883 41.4937 89.1953 41.6466 89.1953H41.6502H41.6537C41.8067 89.1953 41.9596 89.1883 42.1125 89.1777C42.1446 89.1742 42.1766 89.1742 42.2086 89.1707C42.3402 89.1601 42.4718 89.146 42.6034 89.1284C42.6283 89.1249 42.6532 89.1214 42.6745 89.1179C42.984 89.0721 43.2899 89.0087 43.5957 88.9207C43.6242 88.9137 43.6527 88.9031 43.6811 88.8961C43.7985 88.8609 43.9194 88.8222 44.0368 88.7799C44.0724 88.7658 44.1115 88.7553 44.1471 88.7412C44.268 88.6954 44.3889 88.6462 44.5098 88.5934C44.5312 88.5828 44.5525 88.5758 44.5774 88.5652C44.5845 88.5617 44.5917 88.5582 44.5988 88.5582C44.6166 88.5511 44.6343 88.5406 44.6521 88.53C44.8264 88.449 44.9971 88.361 45.1643 88.266C45.2177 88.2378 45.2674 88.2062 45.3172 88.178C45.4773 88.0829 45.6338 87.9809 45.7903 87.8717C45.8116 87.8577 45.833 87.8436 45.8543 87.8295C46.0215 87.7098 46.1815 87.5796 46.3345 87.4458C46.3807 87.4071 46.4234 87.3648 46.4697 87.3226C46.5835 87.217 46.6973 87.1079 46.8075 86.9952C46.8467 86.953 46.8858 86.9143 46.9249 86.872C47.0636 86.7206 47.1988 86.5622 47.3233 86.3968C47.334 86.3827 47.3446 86.3686 47.3517 86.3546C47.4656 86.2067 47.5687 86.0483 47.6719 85.8899C47.7074 85.8371 47.7359 85.7808 47.7715 85.728C47.8461 85.6012 47.9173 85.4745 47.9849 85.3408C48.0133 85.2809 48.0453 85.2246 48.0738 85.1648C48.0916 85.1296 48.1093 85.1014 48.1236 85.0662L82.3366 10.7561C83.9621 7.22543 82.3829 3.05055 78.8083 1.43833Z" fill="url(#paint0_linear_692_124)" />
                            <defs>
                                <linearGradient id="paint0_linear_692_124" x1="41.6516" y1="0.802597" x2="41.6516" y2="89.1953" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#15A36E" />
                                    <stop offset="1" stopColor="#96E6B3" />
                                </linearGradient>
                            </defs>
                        </svg></span>
                    <span className="w-[120px] h-[25px] text-[18px] leading-[24.55px] text-center text-[#57CC99] font-bold font-[Nunito]">DevPhantom</span>
                </div>
        {/* sidebar */}
        <div className="w-[250px] h-[784px] justify-between items-stretch text-[#818181] mt-10">
          <ul className=" flex flex-col items-start self-stretch w-[250px] h-[330px] gap-[20px] text-[16px]">
            <li className="w-[250px] h-[50px] p-[0px] pr-[30px] pl-[0px] rounded-r-[8px] gap-[30px] bg-[#FFFFFE] cursor-pointer hover:border-l-8 hover:bg-[#F1FFFA] flex justify-center items-center">
              <span className="w-[153px] h-[25px] gap-[10px] flex items-center text-[16px]"><MdOutlineDashboard size={17} color='#818181' />Tableau de bord</span>
            </li>
            <li className="w-[250px] h-[50px] pl-auto gap-[10px] bg-[#FFFFFE] cursor-pointer hover:border-l-8 hover:bg-[#F1FFFA] flex justify-center items-center ">
              <span className="w-[153px] h-[25px] gap-[10px] flex items-center -ml-7 text-[16px] font-[Nunito]">
                <MdOutlineCampaign size={20} color='#818181' />Campagneses
              </span></li>
            <li className="w-[250px] h-[50px] pl-auto gap-[10px] bg-[#FFFFFE] cursor-pointer hover:border-l-8 hover:bg-[#F1FFFA] flex justify-center items-center ">
              <span className="w-[153px] h-[25px] gap-[10px] flex items-center -ml-7 text-[16px] font-[Nunito]">
                <MdGroups2 size={20} color='#818181' />Influenceurs
              </span></li>
            <li className="w-[250px] h-[50px] pl-auto gap-[10px] bg-[#FFFFFE] cursor-pointer hover:border-l-8 hover:bg-[#F1FFFA] flex justify-center items-center">
              <span className="w-[153px] h-[25px] gap-[10px] flex items-center -ml-7 text-[16px] font-[Nunito]">
                <MdOutlineEventNote size={20} color='#818181' />Activités
              </span></li>
            <li className="w-[250px] h-[50px] pl-auto gap-[10px] bg-[#FFFFFE] cursor-pointer hover:border-l-8 hover:bg-[#F1FFFA] flex justify-center items-center">
              <span className="w-[153px] h-[25px] gap-[10px] flex items-center font-[Nunito] text-[16px] -ml-7">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 21 20" fill="none">
                  <path d="M7.04133 10.2083H4.79198C2.57437 10.2083 1.54166 11.2411 1.54166 13.4587V15.708C1.54166 17.9256 2.57437 18.9583 4.79198 18.9583H7.04133C9.25894 18.9583 10.2917 17.9256 10.2917 15.708V13.4587C10.2917 11.2411 9.25894 10.2083 7.04133 10.2083ZM9.04166 15.708C9.04166 17.2412 8.57453 17.7083 7.04133 17.7083H4.79198C3.25878 17.7083 2.79166 17.2412 2.79166 15.708V13.4587C2.79166 11.9255 3.25878 11.4583 4.79198 11.4583H7.04133C8.57453 11.4583 9.04166 11.9255 9.04166 13.4587V15.708ZM19.4583 12.5C19.4564 14.2123 18.7754 15.8539 17.5646 17.0646C16.3539 18.2754 14.7123 18.9564 13 18.9583C12.8895 18.9582 12.7809 18.9288 12.6854 18.8731C12.59 18.8173 12.511 18.7373 12.4565 18.6411C12.402 18.545 12.3739 18.4361 12.3752 18.3255C12.3765 18.215 12.407 18.1068 12.4637 18.0119L13.3385 16.5536C13.4241 16.4119 13.5623 16.31 13.7228 16.2701C13.8834 16.2302 14.0533 16.2555 14.1952 16.3406C14.3371 16.4256 14.4395 16.5635 14.48 16.7239C14.5205 16.8843 14.4957 17.0542 14.4111 17.1965L14.1857 17.5724C15.3294 17.3033 16.3487 16.6561 17.0788 15.7355C17.8088 14.8149 18.2068 13.6749 18.2083 12.5C18.2083 12.3342 18.2742 12.1753 18.3914 12.0581C18.5086 11.9409 18.6676 11.875 18.8333 11.875C18.9991 11.875 19.1581 11.9409 19.2753 12.0581C19.3925 12.1753 19.4583 12.3342 19.4583 12.5ZM1.54166 7.50001C1.54357 5.78774 2.22462 4.14615 3.43537 2.93539C4.64613 1.72463 6.28772 1.04359 7.99999 1.04167C8.11053 1.04181 8.21906 1.07124 8.31453 1.12696C8.41 1.18267 8.48901 1.26269 8.5435 1.35887C8.598 1.45504 8.62604 1.56394 8.62477 1.67447C8.6235 1.785 8.59297 1.89323 8.53628 1.98812L7.66145 3.44646C7.5759 3.58808 7.4377 3.69001 7.27714 3.72994C7.11657 3.76986 6.94672 3.74452 6.80481 3.65945C6.6629 3.57439 6.56048 3.43655 6.52 3.27612C6.47953 3.11569 6.50429 2.94576 6.58886 2.80356L6.81428 2.42758C5.67062 2.69672 4.65125 3.34396 3.92121 4.26453C3.19117 5.18509 2.79317 6.3251 2.79166 7.50001C2.79166 7.66577 2.72581 7.82474 2.6086 7.94195C2.49139 8.05916 2.33242 8.12501 2.16666 8.12501C2.0009 8.12501 1.84193 8.05916 1.72471 7.94195C1.6075 7.82474 1.54166 7.66577 1.54166 7.50001ZM19.4583 5.41667C19.4583 4.55138 19.2017 3.70552 18.721 2.98605C18.2403 2.26659 17.557 1.70583 16.7576 1.3747C15.9581 1.04357 15.0785 0.956928 14.2298 1.12574C13.3811 1.29455 12.6016 1.71123 11.9897 2.32308C11.3779 2.93494 10.9612 3.71449 10.7924 4.56315C10.6236 5.41182 10.7102 6.29149 11.0414 7.09091C11.3725 7.89034 11.9332 8.57362 12.6527 9.05435C13.3722 9.53508 14.218 9.79167 15.0833 9.79167C16.2432 9.79027 17.3552 9.32888 18.1754 8.50871C18.9955 7.68855 19.4569 6.57656 19.4583 5.41667ZM11.9583 5.41667C11.9583 4.79861 12.1416 4.19442 12.485 3.68052C12.8284 3.16661 13.3164 2.76607 13.8874 2.52955C14.4585 2.29303 15.0868 2.23114 15.693 2.35172C16.2992 2.4723 16.856 2.76993 17.293 3.20696C17.7301 3.644 18.0277 4.20083 18.1483 4.80702C18.2689 5.41321 18.207 6.04154 17.9704 6.61256C17.7339 7.18358 17.3334 7.67164 16.8195 8.01502C16.3056 8.3584 15.7014 8.54167 15.0833 8.54167C14.2548 8.54063 13.4606 8.21106 12.8748 7.62523C12.2889 7.0394 11.9594 6.24515 11.9583 5.41667Z" fill="#818181" />
                </svg>Conversions
              </span></li>
          </ul>

        </div>
        <ul className="w-[250px] h-[110px] gap-[10px]">
          <li className="w-[250px] h-[50px] pl-auto gap-[10px] bg-[#FFFFFE] cursor-pointer hover:border-l-8 hover:bg-[#F1FFFA] flex justify-center items-center">
            <span className="w-[153px] h-[25px] gap-[10px] flex items-center -ml-6 text-[16px] font-[Nunito]">
              <MdSettings size={20} color='#818181' />Parametres
            </span></li>
          <li className="w-[250px] h-[50px] pl-auto gap-[10px] bg-[#FFFFFE] cursor-pointer hover:border-l-8 hover:bg-[#F1FFFA] flex justify-center items-center">
            <span className="w-[153px] h-[25px] gap-[10px] flex items-center -ml-7 text-[16px] font-[Nunito]">
              <BiLogOut size={20} color='#818181' />Deconexion
            </span></li>
        </ul>
      </div>

      <div className="  absolute top-[114px]  h-[290px] left-[285px] inline-flex p-[25px] flex-col items-start gap-[20px] rounded-[8px] bg-[var(--White, #FFFFFE)] shadow-[0px 4px 15px 0px rgba(0, 0, 0, 0.10)] bg-[#FFFFFE]">
        <div className="flex w-[1100px] justify-between items-start">
          <div className="flex items-center gap-5">
            <Image width={80} height={80} src={userImg} alt="user img" />
            <div className="flex flex-col items-start gap-5">
              <p className="text-center font-Poppins text-[16px] font-medium leading-normal text-[#12130F] not-italic">Jean David</p>
              <span className="text-center font-Poppins text-[12px] font-[400] leading-normal text-[#818181] not-italic">@jeanDav213</span>
              <span className="text-center font-Poppins text-[10px] font-[500] leading-normal text-[#1D8DF4] not-italic">Profil vérifier</span>
            </div>
          </div>
           <button  className=" btnTab w-[94px] h-[38px] pl-[15px] text-center leading-3 pr-[15px] pt-[10px]  pb-[10px] text-white rounded-[8px] gap-[10px] bg-[#15A36E] hover:bg-[#15A36E]">Inviter</button>
        </div>
        {/* 2e bloc */}
        <div className="flex w-[1100px] justify-between items-start">
          <div className="flex flex-col items-start gap-[15px]">
            <div className="flex justify-between items-center w-[235px]">
              <span className="text-[#A6A6A6]">Genre</span>
                           <span className="text-center font-Poppins text-[12px] font-normal leading-normal">Homme</span>
            </div>
            <div className="flex justify-between items-center w-[235px]">
              <span className="text-[#A6A6A6]">Localisation</span>
                           <span className="text-center font-Poppins text-[12px] font-normal leading-normal">ile de France</span>
            </div>
            <div className="flex justify-between items-center w-[235px]">
              <span className="text-[#A6A6A6]">Pays</span>
                           <span className="text-center font-Poppins text-[12px] font-normal leading-normal">France</span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[15px]">
            <div className="flex justify-between items-center w-[235px]">
              <span className="text-[#A6A6A6]">Note</span>
              <span className="text-center font-Poppins text-[12px] font-normal leading-normal">★ 4.5</span>
            </div>
            <div className="flex justify-between items-center w-[235px]">
              <span className="text-[#A6A6A6]">Categorie</span>
              <span className="text-center font-Poppins text-[12px] font-normal leading-normal">Sneakers</span>
            </div>
            <div className="flex justify-between items-center w-[235px]">
              <span className="text-[#A6A6A6]">Taux de conversion</span>
              <span className="text-center font-Poppins text-[12px] font-normal leading-normal">8%</span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[15px]">
            <div className="flex justify-between items-center w-[235px]">
              <span className="text-[#A6A6A6]">title</span>
              <span className="text-center font-Poppins text-[12px] font-normal leading-normal">{item.title}</span>
            </div>
            <div className="flex justify-between items-center w-[235px]">
              <span className="text-[#A6A6A6]">Categorie</span>
              <span className="text-center font-Poppins text-[12px] font-normal leading-normal">Sneakers</span>
            </div>
            <div className="flex justify-between items-center w-[235px]">
              <span className="text-[#A6A6A6]">Taux de conversion</span>
              <span className="text-center font-Poppins text-[12px] font-normal leading-normal">★ 4.5</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-end gap-5">
            <span className="text-center font-Roboto-Flex text-[42px]  font-[600] leading-normal">7%</span>
            <span className="text-center font-Nunito text-[14px] font-semibold leading-normal text-[#818181]">Taux d’engagement</span>
          </div>

        </div>
      </div>



    </div>
  );
}
