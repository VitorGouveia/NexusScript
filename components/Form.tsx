"use client"

import { supabase } from "@/app/supabase"

import { ReactNode, useEffect, useRef, useState } from "react"
import {
  adjectives,
  animals,
  colors,
  uniqueNamesGenerator,
} from "unique-names-generator"

const Card = {
  Button: (props: {
    children: ReactNode
    disabled?: boolean
    value: string
    selected: boolean
    onClick: (value: string) => void
  }) => (
    <button
      onClick={() => props.onClick(props.value)}
      type="button"
      style={{
        background: `${
          props.selected
            ? "linear-gradient(180deg, #40340C 0%, #231C06 100%)"
            : "linear-gradient(180deg, hsl(0, 0%, 8%) 0%, hsl(0, 0%, 0%) 100%)"
        }`,
      }}
      disabled={props.disabled ?? false}
      className={`flex h-[180px] w-[180px] flex-col items-center justify-center gap-2 rounded border px-2 py-6 transition hover:brightness-150 disabled:cursor-not-allowed disabled:opacity-50 ${
        props.selected ? "border-amber-300" : "border-zinc-700 "
      }`}
    >
      {props.children}
    </button>
  ),
  Icon: (props: { icon: JSX.Element }) => <>{props.icon}</>,
  Title: (props: { name: string }) => (
    <span className="text-center text-base font-semibold text-zinc-50">
      {props.name}
    </span>
  ),
  Description: (props: { description: string }) => (
    <p className="text-center text-sm font-normal text-zinc-400">
      {props.description}
    </p>
  ),
}

const Icons = {
  copy: (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.387 3.182C14.783 3.219 15.177 3.262 15.57 3.31C16.694 3.45 17.5 4.414 17.5 5.517V16.75C17.5 17.0455 17.4418 17.3381 17.3287 17.611C17.2157 17.884 17.0499 18.1321 16.841 18.341C16.6321 18.5499 16.384 18.7157 16.111 18.8287C15.8381 18.9418 15.5455 19 15.25 19H5.75C5.45453 19 5.16194 18.9418 4.88896 18.8287C4.61598 18.7157 4.36794 18.5499 4.15901 18.341C3.95008 18.1321 3.78434 17.884 3.67127 17.611C3.5582 17.3381 3.5 17.0455 3.5 16.75V5.517C3.5 4.414 4.306 3.449 5.43 3.31C5.823 3.262 6.217 3.22 6.613 3.182C6.79124 2.55369 7.16958 2.00068 7.6906 1.60688C8.21163 1.21309 8.8469 1.00002 9.5 1H11.5C12.873 1 14.031 1.923 14.387 3.182ZM8 4C8 3.60218 8.15804 3.22064 8.43934 2.93934C8.72064 2.65804 9.10218 2.5 9.5 2.5H11.5C11.8978 2.5 12.2794 2.65804 12.5607 2.93934C12.842 3.22064 13 3.60218 13 4V4.5H8V4Z"
        fill="black"
      />
    </svg>
  ),
  building: (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9784 3.31997C16.141 3.24146 16.3193 3.20068 16.5 3.20068C16.6806 3.20068 16.8589 3.24146 17.0216 3.31997L28.6216 8.91997C28.896 9.05448 29.1088 9.28864 29.2165 9.57467C29.3242 9.86071 29.3187 10.1771 29.2011 10.4592C29.0835 10.7413 28.8627 10.9679 28.5838 11.0928C28.3048 11.2177 27.9887 11.2314 27.7 11.1312V26.4H28.1C28.4182 26.4 28.7234 26.5264 28.9485 26.7514C29.1735 26.9765 29.3 27.2817 29.3 27.6C29.3 27.9182 29.1735 28.2235 28.9485 28.4485C28.7234 28.6735 28.4182 28.8 28.1 28.8H4.89995C4.58169 28.8 4.27647 28.6735 4.05142 28.4485C3.82638 28.2235 3.69995 27.9182 3.69995 27.6C3.69995 27.2817 3.82638 26.9765 4.05142 26.7514C4.27647 26.5264 4.58169 26.4 4.89995 26.4H5.29995V11.1312C5.01121 11.2314 4.6951 11.2177 4.41614 11.0928C4.13717 10.9679 3.91636 10.7413 3.79878 10.4592C3.6812 10.1771 3.6757 9.86071 3.7834 9.57467C3.8911 9.28864 4.10389 9.05448 4.37835 8.91997L15.9784 3.31997ZM18.1 9.59997C18.1 10.0243 17.9314 10.4313 17.6313 10.7313C17.3313 11.0314 16.9243 11.2 16.5 11.2C16.0756 11.2 15.6686 11.0314 15.3686 10.7313C15.0685 10.4313 14.9 10.0243 14.9 9.59997C14.9 9.17563 15.0685 8.76866 15.3686 8.4686C15.6686 8.16855 16.0756 7.99997 16.5 7.99997C16.9243 7.99997 17.3313 8.16855 17.6313 8.4686C17.9314 8.76866 18.1 9.17563 18.1 9.59997ZM12.5 15.6C12.5 15.2817 12.3735 14.9765 12.1485 14.7514C11.9234 14.5264 11.6182 14.4 11.3 14.4C10.9817 14.4 10.6765 14.5264 10.4514 14.7514C10.2264 14.9765 10.1 15.2817 10.1 15.6V24.4C10.1 24.7182 10.2264 25.0235 10.4514 25.2485C10.6765 25.4735 10.9817 25.6 11.3 25.6C11.6182 25.6 11.9234 25.4735 12.1485 25.2485C12.3735 25.0235 12.5 24.7182 12.5 24.4V15.6ZM17.7 15.6C17.7 15.2817 17.5735 14.9765 17.3485 14.7514C17.1234 14.5264 16.8182 14.4 16.5 14.4C16.1817 14.4 15.8765 14.5264 15.6514 14.7514C15.4264 14.9765 15.3 15.2817 15.3 15.6V24.4C15.3 24.7182 15.4264 25.0235 15.6514 25.2485C15.8765 25.4735 16.1817 25.6 16.5 25.6C16.8182 25.6 17.1234 25.4735 17.3485 25.2485C17.5735 25.0235 17.7 24.7182 17.7 24.4V15.6ZM22.9 15.6C22.9 15.2817 22.7735 14.9765 22.5485 14.7514C22.3234 14.5264 22.0182 14.4 21.7 14.4C21.3817 14.4 21.0765 14.5264 20.8514 14.7514C20.6264 14.9765 20.5 15.2817 20.5 15.6V24.4C20.5 24.7182 20.6264 25.0235 20.8514 25.2485C21.0765 25.4735 21.3817 25.6 21.7 25.6C22.0182 25.6 22.3234 25.4735 22.5485 25.2485C22.7735 25.0235 22.9 24.7182 22.9 24.4V15.6Z"
        fill="#FAFAFA"
      />
    </svg>
  ),
  link: (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-zinc-300"
    >
      <path
        d="M20.0712 6.77112C20.8215 6.02088 21.839 5.59939 22.9 5.59939C23.9611 5.59939 24.9786 6.02088 25.7288 6.77112C26.4791 7.52136 26.9006 8.53891 26.9006 9.59992C26.9006 10.6609 26.4791 11.6785 25.7288 12.4287L23.7688 14.3871C23.5504 14.6135 23.4295 14.9167 23.4324 15.2314C23.4353 15.546 23.5617 15.8469 23.7843 16.0693C24.0068 16.2917 24.3079 16.4177 24.6225 16.4203C24.9372 16.4229 25.2402 16.3018 25.4664 16.0831L27.4248 14.1247C28.5907 12.9177 29.2357 11.301 29.2212 9.62295C29.2066 7.94489 28.5335 6.33969 27.3469 5.15308C26.1603 3.96647 24.5551 3.29339 22.877 3.27881C21.199 3.26422 19.5823 3.90931 18.3752 5.07512L13.5752 9.87512C12.9518 10.4986 12.4639 11.2442 12.1422 12.0652C11.8205 12.8861 11.6718 13.7647 11.7056 14.6458C11.7394 15.5268 11.9549 16.3914 12.3386 17.1853C12.7223 17.9792 13.2659 18.6852 13.9352 19.2591C14.1774 19.4613 14.4893 19.5599 14.8036 19.5338C15.1179 19.5077 15.4093 19.3589 15.6148 19.1196C15.8202 18.8803 15.9232 18.5698 15.9014 18.2551C15.8797 17.9405 15.7349 17.647 15.4984 17.4383C15.0796 17.0798 14.7394 16.6385 14.4992 16.1422C14.259 15.6459 14.124 15.1053 14.1026 14.5544C14.0813 14.0034 14.1741 13.454 14.3752 12.9406C14.5763 12.4272 14.8814 11.961 15.2712 11.5711L20.0712 6.77112Z"
        fill="currentColor"
      />
      <path
        d="M19.0648 12.7407C18.8227 12.5386 18.5107 12.4399 18.1964 12.466C17.8821 12.4921 17.5907 12.6409 17.3852 12.8802C17.1798 13.1195 17.0768 13.4301 17.0986 13.7448C17.1204 14.0594 17.2651 14.3528 17.5016 14.5615C17.9204 14.9201 18.2607 15.3614 18.5009 15.8577C18.7411 16.354 18.8761 16.8945 18.8974 17.4455C18.9187 17.9964 18.8259 18.5459 18.6248 19.0592C18.4237 19.5726 18.1187 20.0389 17.7288 20.4287L12.9288 25.2287C12.1785 25.979 11.161 26.4005 10.1 26.4005C9.03898 26.4005 8.02143 25.979 7.27118 25.2287C6.52094 24.4785 6.09946 23.461 6.09946 22.3999C6.09946 21.3389 6.52094 20.3214 7.27118 19.5711L9.23118 17.6127C9.44967 17.3863 9.57048 17.0831 9.5676 16.7685C9.56472 16.4539 9.43837 16.153 9.21578 15.9306C8.99318 15.7082 8.69215 15.5821 8.37751 15.5795C8.06287 15.577 7.7598 15.6981 7.53358 15.9167L5.57518 17.8751C4.96392 18.4655 4.47635 19.1717 4.14093 19.9526C3.80552 20.7334 3.62896 21.5732 3.62158 22.423C3.6142 23.2728 3.77613 24.1155 4.09792 24.9021C4.41972 25.6886 4.89494 26.4032 5.49585 27.0041C6.09677 27.605 6.81134 28.0802 7.59788 28.402C8.38441 28.7238 9.22716 28.8857 10.077 28.8784C10.9267 28.871 11.7665 28.6944 12.5474 28.359C13.3282 28.0236 14.0344 27.536 14.6248 26.9247L19.4248 22.1247C20.0482 21.5012 20.5361 20.7556 20.8578 19.9347C21.1796 19.1138 21.3282 18.2352 21.2944 17.3541C21.2606 16.473 21.0451 15.6084 20.6614 14.8146C20.2777 14.0207 19.7342 13.3147 19.0648 12.7407Z"
        fill="currentColor"
      />
    </svg>
  ),
  cash: (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.1001 6.40005C2.1001 5.9757 2.26867 5.56874 2.56873 5.26868C2.86878 4.96862 3.27575 4.80005 3.7001 4.80005H29.3001C29.7244 4.80005 30.1314 4.96862 30.4315 5.26868C30.7315 5.56874 30.9001 5.9757 30.9001 6.40005V19.2C30.9001 19.6244 30.7315 20.0314 30.4315 20.3314C30.1314 20.6315 29.7244 20.8 29.3001 20.8H3.7001C3.27575 20.8 2.86878 20.6315 2.56873 20.3314C2.26867 20.0314 2.1001 19.6244 2.1001 19.2V6.40005ZM21.3001 12.8C21.3001 14.0731 20.7944 15.294 19.8942 16.1942C18.994 17.0943 17.7731 17.6 16.5001 17.6C15.2271 17.6 14.0062 17.0943 13.106 16.1942C12.2058 15.294 11.7001 14.0731 11.7001 12.8C11.7001 11.527 12.2058 10.3061 13.106 9.40594C14.0062 8.50576 15.2271 8.00005 16.5001 8.00005C17.7731 8.00005 18.994 8.50576 19.8942 9.40594C20.7944 10.3061 21.3001 11.527 21.3001 12.8ZM6.9001 14.4C7.32444 14.4 7.73141 14.2315 8.03147 13.9314C8.33153 13.6314 8.5001 13.2244 8.5001 12.8C8.5001 12.3757 8.33153 11.9687 8.03147 11.6687C7.73141 11.3686 7.32444 11.2 6.9001 11.2C6.47575 11.2 6.06878 11.3686 5.76873 11.6687C5.46867 11.9687 5.3001 12.3757 5.3001 12.8C5.3001 13.2244 5.46867 13.6314 5.76873 13.9314C6.06878 14.2315 6.47575 14.4 6.9001 14.4ZM27.7001 12.8C27.7001 13.2244 27.5315 13.6314 27.2315 13.9314C26.9314 14.2315 26.5244 14.4 26.1001 14.4C25.6758 14.4 25.2688 14.2315 24.9687 13.9314C24.6687 13.6314 24.5001 13.2244 24.5001 12.8C24.5001 12.3757 24.6687 11.9687 24.9687 11.6687C25.2688 11.3686 25.6758 11.2 26.1001 11.2C26.5244 11.2 26.9314 11.3686 27.2315 11.6687C27.5315 11.9687 27.7001 12.3757 27.7001 12.8ZM3.3001 23.2C2.98184 23.2 2.67661 23.3265 2.45157 23.5515C2.22653 23.7766 2.1001 24.0818 2.1001 24.4C2.1001 24.7183 2.22653 25.0235 2.45157 25.2486C2.67661 25.4736 2.98184 25.6 3.3001 25.6C10.3673 25.6 17.2089 26.5648 23.6985 28.368C25.4761 28.8624 27.3001 27.5488 27.3001 25.6544V24.4C27.3001 24.0818 27.1737 23.7766 26.9486 23.5515C26.7236 23.3265 26.4184 23.2 26.1001 23.2C25.7818 23.2 25.4766 23.3265 25.2516 23.5515C25.0265 23.7766 24.9001 24.0818 24.9001 24.4V25.6544C24.8975 25.7208 24.8798 25.7857 24.8483 25.8442C24.8167 25.9027 24.7722 25.9531 24.7182 25.9918C24.6641 26.0304 24.6019 26.0561 24.5364 26.067C24.4709 26.0778 24.4037 26.0735 24.3401 26.0544C17.4885 24.1541 10.4104 23.1939 3.3001 23.2Z"
        fill="#FAFAFA"
      />
    </svg>
  ),
  global: (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.988 8.65916C25.5855 6.65783 23.6411 5.09813 21.3832 4.16316C22.6487 6.38981 23.5472 8.80585 24.044 11.3184C25.1494 10.5798 26.1411 9.68395 26.988 8.65916ZM21.8216 12.52C21.2798 9.18 19.957 6.01518 17.9608 3.28316C16.99 3.17286 16.0099 3.17286 15.0392 3.28316C13.043 6.01518 11.7201 9.18 11.1784 12.52C12.8613 13.2352 14.6714 13.6025 16.5 13.6C18.388 13.6 20.1864 13.216 21.8216 12.52ZM10.9224 15.0016C12.7072 15.6642 14.5961 16.0023 16.5 16C18.4616 16 20.34 15.648 22.0776 15.0016C22.1722 17.0228 21.9831 19.0472 21.516 21.016C19.8725 21.4055 18.189 21.6015 16.5 21.6C14.7736 21.6 13.0952 21.3968 11.4856 21.0144C11.018 19.0462 10.8284 17.0223 10.9224 15.0016ZM8.95598 11.3184C9.45298 8.80641 10.3514 6.39092 11.6168 4.16476C9.35885 5.09973 7.4145 6.65943 6.01198 8.66076C6.85838 9.68156 7.85038 10.5808 8.95598 11.3184ZM28.2344 10.8768C29.1388 12.9458 29.4778 15.2178 29.2168 17.4608C27.6531 18.6023 25.9428 19.528 24.132 20.2128C24.5 18.1332 24.5936 16.0143 24.4104 13.9104C25.8321 13.0998 27.1216 12.0768 28.2344 10.8768ZM4.76558 10.8768C5.87831 12.0768 7.16786 13.0998 8.58958 13.9104C8.40815 16.0149 8.50174 18.134 8.86798 20.2144C7.05715 19.5295 5.34684 18.6039 3.78318 17.4624C3.52266 15.2193 3.86223 12.9473 4.76718 10.8784L4.76558 10.8768ZM16.5 24C17.9368 24 19.3448 23.8736 20.7128 23.632C20.0279 25.4428 19.1023 27.1531 17.9608 28.7168C16.99 28.8269 16.0099 28.8269 15.0392 28.7168C13.8976 27.1531 12.972 25.4428 12.2872 23.632C13.6552 23.8736 15.0632 24 16.5 24ZM23.4712 22.9712C22.9577 24.6649 22.2574 26.2963 21.3832 27.8352C22.9418 27.1897 24.3579 26.2436 25.5507 25.0507C26.7436 23.8579 27.6897 22.4417 28.3352 20.8832C26.8104 21.7504 25.1816 22.4528 23.4712 22.9712ZM11.6168 27.8352C10.0582 27.1897 8.64206 26.2436 7.44922 25.0507C6.25638 23.8579 5.31022 22.4417 4.66478 20.8832C6.18958 21.7504 7.81838 22.4528 9.52878 22.9712C10.0422 24.6649 10.7425 26.2963 11.6168 27.8352Z"
        fill="#FAFAFA"
      />
    </svg>
  ),
  case: (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.1 6.5001C10.1 5.33314 10.5635 4.21399 11.3887 3.38883C12.2138 2.56367 13.333 2.1001 14.5 2.1001H18.5C19.6669 2.1001 20.7861 2.56367 21.6112 3.38883C22.4364 4.21399 22.9 5.33314 22.9 6.5001V7.2089C23.8152 7.2969 24.724 7.4041 25.6296 7.5289C27.7848 7.8313 29.3 9.7001 29.3 11.8121V17.3625C29.3 19.1641 28.1896 20.8681 26.372 21.4265C23.2488 22.3849 19.9336 22.9001 16.5 22.9001C13.0664 22.9001 9.74955 22.3849 6.62795 21.4265C4.81035 20.8681 3.69995 19.1641 3.69995 17.3625V11.8121C3.69995 9.6985 5.21515 7.8297 7.37035 7.5305C8.27788 7.40427 9.18794 7.29704 10.1 7.2089V6.5001ZM20.5 6.5001V7.0201C17.8357 6.85978 15.1642 6.85978 12.5 7.0201V6.5001C12.5 5.3961 13.396 4.5001 14.5 4.5001H18.5C19.604 4.5001 20.5 5.3961 20.5 6.5001ZM16.5 16.5001C16.0756 16.5001 15.6686 16.6687 15.3686 16.9687C15.0685 17.2688 14.9 17.6758 14.9 18.1001V18.1161C14.9 18.5404 15.0685 18.9474 15.3686 19.2475C15.6686 19.5475 16.0756 19.7161 16.5 19.7161H16.516C16.9403 19.7161 17.3473 19.5475 17.6473 19.2475C17.9474 18.9474 18.116 18.5404 18.116 18.1161V18.1001C18.116 17.6758 17.9474 17.2688 17.6473 16.9687C17.3473 16.6687 16.9403 16.5001 16.516 16.5001H16.5Z"
        fill="#FAFAFA"
      />
      <path
        d="M5.30005 24.5881V23.4937C5.50165 23.5785 5.70805 23.6537 5.92405 23.7209C9.27125 24.7481 12.8248 25.3001 16.5 25.3001C20.1752 25.3001 23.7289 24.7481 27.0761 23.7209C27.2921 23.6553 27.4984 23.5785 27.7 23.4937V24.5881C27.7 26.7433 26.124 28.6361 23.9192 28.8857C18.9887 29.4407 14.0114 29.4407 9.08085 28.8857C6.87605 28.6361 5.30005 26.7433 5.30005 24.5881Z"
        fill="#FAFAFA"
      />
    </svg>
  ),
  spark: (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_917_4734)">
        <path
          d="M18.4999 0.5L2.5 19.6999H16.9L15.3 32.5L31.2999 13.3H16.9L18.4999 0.5Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_917_4734">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  circle: (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 26.5C6.33187 26.5 0.5 20.6681 0.5 13.5C0.5 6.33187 6.33187 0.5 13.5 0.5C20.6681 0.5 26.5 6.33187 26.5 13.5C26.5 20.6681 20.6681 26.5 13.5 26.5Z"
        fill="#FAFAFA"
      />
    </svg>
  ),
  gem: (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_917_4741)">
        <path
          d="M9.00002 2C8.52502 2 8.07502 2.23125 7.79377 2.6125L0.793773 12.1125C0.368773 12.6875 0.406273 13.4812 0.887523 14.0125L15.3875 30.0125C15.675 30.325 16.075 30.5063 16.5 30.5063C16.925 30.5063 17.3313 30.325 17.6125 30.0125L32.1125 14.0125C32.5875 13.4812 32.6313 12.6875 32.2063 12.1125L25.2063 2.6125C24.925 2.225 24.475 2 24 2H9.00002Z"
          fill="#FAFAFA"
        />
      </g>
      <defs>
        <clipPath id="clip0_917_4741">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  Google: () => (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_917_4775)">
        <path
          d="M20.4996 10.2297C20.4996 9.54995 20.4434 8.8665 20.3234 8.19775H10.7002V12.0486H16.211C15.9823 13.2905 15.2475 14.3892 14.1716 15.0873V17.586H17.4593C19.39 15.8443 20.4996 13.2722 20.4996 10.2297Z"
          fill="#4285F4"
        />
        <path
          d="M10.7002 20.0003C13.4518 20.0003 15.7723 19.1147 17.463 17.5862L14.1753 15.0875C13.2606 15.6975 12.0797 16.0429 10.7039 16.0429C8.04224 16.0429 5.78544 14.2828 4.9757 11.9165H1.58301V14.4923C3.31497 17.8691 6.84261 20.0003 10.7002 20.0003Z"
          fill="#34A853"
        />
        <path
          d="M4.97227 11.9163C4.54491 10.6743 4.54491 9.32947 4.97227 8.0875V5.51172H1.58333C0.136286 8.33737 0.136286 11.6664 1.58333 14.4921L4.97227 11.9163Z"
          fill="#FBBC04"
        />
        <path
          d="M10.7002 3.95756C12.1547 3.93552 13.5605 4.47198 14.6139 5.45674L17.5268 2.60169C15.6824 0.904099 13.2344 -0.0292099 10.7002 0.000185605C6.84261 0.000185605 3.31497 2.13136 1.58301 5.51185L4.97195 8.08764C5.77795 5.71762 8.03849 3.95756 10.7002 3.95756Z"
          fill="#EA4335"
        />
      </g>
      <defs>
        <clipPath id="clip0_917_4775">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  Apple: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6905 15.3235C17.4023 15.9894 17.0611 16.6023 16.6658 17.1659C16.127 17.9341 15.6858 18.4659 15.3458 18.7612C14.8188 19.2459 14.2541 19.4941 13.6494 19.5082C13.2153 19.5082 12.6917 19.3847 12.0823 19.1341C11.4709 18.8847 10.909 18.7612 10.3953 18.7612C9.85643 18.7612 9.27855 18.8847 8.66043 19.1341C8.04137 19.3847 7.54267 19.5153 7.16137 19.5282C6.58149 19.5529 6.00349 19.2976 5.42655 18.7612C5.05831 18.44 4.59772 17.8894 4.04596 17.1094C3.45396 16.2765 2.96725 15.3106 2.58596 14.2094C2.17761 13.02 1.9729 11.8682 1.9729 10.7532C1.9729 9.47587 2.2489 8.37422 2.80172 7.45105C3.23619 6.70952 3.81419 6.12458 4.53761 5.69517C5.26102 5.26575 6.04267 5.04693 6.88443 5.03293C7.34502 5.03293 7.94902 5.1754 8.69961 5.4554C9.44808 5.73634 9.92866 5.87881 10.1394 5.87881C10.2969 5.87881 10.8308 5.71222 11.7358 5.38011C12.5917 5.07211 13.3141 4.94458 13.9058 4.99481C15.5094 5.12422 16.7141 5.75634 17.5153 6.89517C16.0811 7.76411 15.3717 8.98117 15.3858 10.5425C15.3988 11.7586 15.84 12.7706 16.707 13.5741C17.1 13.947 17.5388 14.2353 18.027 14.44C17.9211 14.747 17.8094 15.0412 17.6905 15.3235ZM14.0129 0.851753C14.0129 1.80494 13.6647 2.69493 12.9705 3.51869C12.1329 4.49799 11.1197 5.06387 10.021 4.97458C10.007 4.86022 9.9989 4.73987 9.9989 4.6134C9.9989 3.69834 10.3973 2.71905 11.1047 1.91834C11.4578 1.51293 11.907 1.17584 12.4517 0.90693C12.9953 0.642035 13.5094 0.495541 13.9929 0.470459C14.007 0.597883 14.0129 0.72533 14.0129 0.851753Z"
        fill="#FAFAFA"
      />
    </svg>
  ),
}

export const Form = () => {
  const [step, setStep] = useState(0)
  const [error, setError] = useState("")
  const ref = useRef<HTMLDivElement>(null)
  const [type, setType] = useState<
    ("institucional" | "bio" | "sales-page" | "landing-page") | null
  >(null)
  const [style, setStyle] = useState<
    ("professional" | "modern" | "minimalist" | "elegant") | null
  >(null)

  const [loggedIn, setLoggedIn] = useState(false)
  const [site, setSite] = useState<{ url: string } | null>(null)

  useEffect(() => {
    async function main() {
      const params = new URLSearchParams(window.location.search)

      const action = params.get("action")

      if (!action) {
        return
      }

      const createSiteParams = {
        action: params.get("action"),
        type: params.get("type"),
        style: params.get("style"),
      }

      if (createSiteParams.action === "create-site") {
        setType(createSiteParams.type as any)
        setType(createSiteParams.action as any)
        setStep(3)
        window.history.pushState({}, document.title, window.location.pathname)
        ref.current?.scrollIntoView()

        const slug = uniqueNamesGenerator({
          dictionaries: [adjectives, colors, animals],
          separator: "-",
          style: "lowerCase",
        })

        const sections: any[] = []

        try {
          await supabase.from("websites").insert({
            slug,
            sections,
          })
        } catch (error) {
          console.log("failed to supabase", error)
        }

        const url = `${location.origin}/${slug}`

        setSite({
          url,
        })
      }
    }

    main()
  }, [])

  const handleSelectType = (value: string) => {
    if (type === value) {
      setType(null)
    } else {
      setError("")
      setType(value as any)
    }
  }

  const handleSelectStyle = (value: string) => {
    if (style === value) {
      setStyle(null)
    } else {
      setError("")
      setStyle(value as any)
    }
  }

  const incrementStep = () => {
    setError("")

    if (step === 0) {
      if (!type) {
        setError("Por favor, escolha um tipo!")
        return
      }
    }

    if (step === 1) {
      if (!style) {
        setError("Por favor, escolha um estilo!")
        return
      }
    }

    setStep((step) => step + 1)
  }

  const decrementStep = () => {
    setStep((step) => step - 1)
  }

  const loginWithGoogle = async () => {
    const searchParams = new URLSearchParams()

    if (!type || !style) {
      return alert("Preencha o formulário!")
    }

    searchParams.set("action", "create-site")
    searchParams.set("type", type)
    searchParams.set("style", style)

    const redirectTo = `${location.origin}?${searchParams.toString()}`
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo,
      },
    })

    if (error) {
      console.log(error)
      return
    }
  }

  const loginWithApple = () => {}

  return (
    <div
      id="criar-site"
      ref={ref}
      className={`flex h-[700px] ${
        site ? "w-full" : "w-96"
      } flex-col justify-between gap-12`}
    >
      <div className="flex flex-col gap-4">
        <h3
          className="text-center text-3xl font-semibold text-zinc-200"
          style={{ fontFamily: "Lexend" }}
        >
          {step === 0 && "Escolha um tipo de site"}
          {step === 1 && "Escolha um estilo"}
          {step === 2 && "Entre com a sua conta"}
          {step === 3 && "Aqui está o seu site."}
        </h3>

        <p className="h-6 w-full text-center text-base text-red-500">{error}</p>
      </div>

      <div className="flex w-full flex-wrap items-center justify-center gap-4">
        {step === 0 && (
          <>
            <Card.Button
              value="institucional"
              selected={type === "institucional"}
              onClick={handleSelectType}
            >
              <Card.Icon icon={Icons.building} />

              <Card.Title name="Institucional" />

              <Card.Description description="Um site sobre a minha empresa." />
            </Card.Button>

            <Card.Button
              value="bio"
              selected={type === "bio"}
              onClick={handleSelectType}
            >
              <Card.Icon icon={Icons.link} />

              <Card.Title name="Bio" />

              <Card.Description description="Um agregador de links para redes sociais." />
            </Card.Button>

            <Card.Button
              value="sales-page"
              selected={type === "sales-page"}
              onClick={handleSelectType}
              disabled
            >
              <Card.Icon icon={Icons.cash} />

              <Card.Title name="Página de vendas" />

              <Card.Description description="Página de vendas para infoproduto." />
            </Card.Button>

            <Card.Button
              value="landing-page"
              selected={type === "landing-page"}
              onClick={handleSelectType}
            >
              <Card.Icon icon={Icons.global} />

              <Card.Title name="Landing Page" />

              <Card.Description description="Página informacional sobre algo." />
            </Card.Button>
          </>
        )}

        {step === 1 && (
          <>
            <Card.Button
              value="professional"
              selected={style === "professional"}
              onClick={handleSelectStyle}
            >
              <Card.Icon icon={Icons.case} />

              <Card.Title name="Profissional" />
            </Card.Button>

            <Card.Button
              value="modern"
              selected={style === "modern"}
              onClick={handleSelectStyle}
            >
              <Card.Icon icon={Icons.spark} />

              <Card.Title name="Moderno" />
            </Card.Button>

            <Card.Button
              value="minimalist"
              selected={style === "minimalist"}
              onClick={handleSelectStyle}
            >
              <Card.Icon icon={Icons.circle} />

              <Card.Title name="Minimalista" />
            </Card.Button>

            <Card.Button
              value="elegant"
              selected={style === "elegant"}
              onClick={handleSelectStyle}
            >
              <Card.Icon icon={Icons.gem} />

              <Card.Title name="Elegante" />
            </Card.Button>
          </>
        )}

        {step === 2 && (
          <div className="flex w-full flex-col gap-6">
            <button
              type="button"
              onClick={loginWithGoogle}
              className="flex w-full items-center justify-center gap-1.5 rounded bg-zinc-900 p-3 text-gray-50 transition hover:bg-zinc-800"
            >
              <Icons.Google />
              <span className="w-[200px] font-bold">
                Continuar com o Google
              </span>
            </button>

            <button
              disabled
              type="button"
              onClick={loginWithApple}
              className="flex w-full items-center justify-center gap-1.5 rounded bg-zinc-900 p-3 text-gray-50 transition hover:bg-zinc-800 disabled:opacity-50"
            >
              <Icons.Apple />
              <span className="w-[200px] font-bold">Continuar com a Apple</span>
            </button>
          </div>
        )}

        {step === 3 && site && (
          <div className="flex flex-col items-center gap-8">
            <div className="flex h-[60px] items-center gap-2">
              <div className="flex h-full items-center gap-2 rounded border border-zinc-700 bg-zinc-900 p-3">
                {Icons.link}

                <p className="font-normal text-zinc-50">{site.url}</p>
              </div>

              <button
                onClick={async () => {
                  if ("clipboard" in navigator) {
                    await navigator.clipboard.writeText(site.url)

                    alert("Link copiado!")
                  }
                }}
                className="flex h-full items-center gap-2 rounded bg-amber-300 px-2 py-1 text-zinc-900 transition hover:bg-amber-200"
              >
                {Icons.copy}
                Copiar
              </button>
            </div>

            <p className="text-zinc-50">
              Agora entre na dashboard e modifique todos os textos
            </p>

            <a
              href="/dashboard"
              className="flex w-max items-center justify-center gap-2 rounded bg-amber-300 px-2 py-2 text-zinc-900 transition hover:bg-amber-200"
            >
              Entrar na dashboard
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 4.25C3 3.65326 3.23705 3.08097 3.65901 2.65901C4.08097 2.23705 4.65326 2 5.25 2H10.75C11.3467 2 11.919 2.23705 12.341 2.65901C12.7629 3.08097 13 3.65326 13 4.25V6.25C13 6.44891 12.921 6.63968 12.7803 6.78033C12.6397 6.92098 12.4489 7 12.25 7C12.0511 7 11.8603 6.92098 11.7197 6.78033C11.579 6.63968 11.5 6.44891 11.5 6.25V4.25C11.5 4.05109 11.421 3.86032 11.2803 3.71967C11.1397 3.57902 10.9489 3.5 10.75 3.5H5.25C5.05109 3.5 4.86032 3.57902 4.71967 3.71967C4.57902 3.86032 4.5 4.05109 4.5 4.25V15.75C4.5 16.164 4.836 16.5 5.25 16.5H10.75C10.9489 16.5 11.1397 16.421 11.2803 16.2803C11.421 16.1397 11.5 15.9489 11.5 15.75V13.75C11.5 13.5511 11.579 13.3603 11.7197 13.2197C11.8603 13.079 12.0511 13 12.25 13C12.4489 13 12.6397 13.079 12.7803 13.2197C12.921 13.3603 13 13.5511 13 13.75V15.75C13 16.3467 12.7629 16.919 12.341 17.341C11.919 17.7629 11.3467 18 10.75 18H5.25C4.65326 18 4.08097 17.7629 3.65901 17.341C3.23705 16.919 3 16.3467 3 15.75V4.25Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 10C6 9.80111 6.07902 9.61035 6.21967 9.46969C6.36032 9.32904 6.55109 9.25002 6.75 9.25002H16.296L15.248 8.30702C15.1725 8.24177 15.1107 8.16209 15.0664 8.07267C15.022 7.98324 14.996 7.88587 14.9898 7.78625C14.9836 7.68663 14.9973 7.58677 15.0302 7.49252C15.063 7.39827 15.1144 7.31154 15.1812 7.23739C15.248 7.16325 15.329 7.10319 15.4193 7.06073C15.5096 7.01827 15.6075 6.99428 15.7073 6.99014C15.807 6.98601 15.9066 7.00183 16.0001 7.03667C16.0936 7.0715 16.1793 7.12466 16.252 7.19302L18.752 9.44302C18.83 9.51335 18.8923 9.59927 18.935 9.69522C18.9777 9.79117 18.9998 9.89501 18.9998 10C18.9998 10.105 18.9777 10.2089 18.935 10.3048C18.8923 10.4008 18.83 10.4867 18.752 10.557L16.252 12.807C16.1793 12.8754 16.0936 12.9285 16.0001 12.9634C15.9066 12.9982 15.807 13.014 15.7073 13.0099C15.6075 13.0058 15.5096 12.9818 15.4193 12.9393C15.329 12.8969 15.248 12.8368 15.1812 12.7627C15.1144 12.6885 15.063 12.6018 15.0302 12.5075C14.9973 12.4133 14.9836 12.3134 14.9898 12.2138C14.996 12.1142 15.022 12.0168 15.0664 11.9274C15.1107 11.838 15.1725 11.7583 15.248 11.693L16.296 10.75H6.75C6.65151 10.75 6.55398 10.7306 6.46299 10.6929C6.37199 10.6552 6.28931 10.6 6.21967 10.5304C6.15003 10.4607 6.09478 10.378 6.05709 10.287C6.0194 10.196 6 10.0985 6 10Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-4">
        {step < 2 && (
          <button
            onClick={incrementStep}
            type="button"
            className="flex items-center justify-center rounded-full bg-amber-300 p-3 px-6 font-bold text-zinc-900 transition hover:bg-amber-200"
          >
            Prosseguir
          </button>
        )}
        {step >= 1 && (
          <button
            onClick={decrementStep}
            type="button"
            className="flex w-max items-center justify-center rounded-full bg-zinc-900 p-3 px-6 font-bold text-zinc-50 transition hover:bg-zinc-800"
          >
            Voltar
          </button>
        )}
      </div>
    </div>
  )
}
