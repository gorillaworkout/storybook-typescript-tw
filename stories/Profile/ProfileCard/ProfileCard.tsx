'use client'
import React from "react";
import { useAuth } from "../../../context/AuthContext";
import { GrEdit } from "react-icons/gr";
import { Form } from "../../Form/Form";
interface IDataUser {
  biography: string;
  nik: string;
  jobPosition: string;
  company: string;
  division: string;
  location: string;
}
interface ProfileCardProps {
  onClick?: () => void;
  dataUser: IDataUser
}

/**
 * Primary UI component for user interaction
 */
export const ProfileCard = ({
  // primary = false,
  // size = "medium",
  // backgroundColor,
  // label,
  // name,
  // bgImage,
  // image,
  // title,
  dataUser,
  ...props
}: ProfileCardProps) => {
  console.log(dataUser, "data user");
  const { checkEdit, logout, isEdit } = useAuth();
  // console.log(dataUser, "user");

  return (
    <>
      <div className="bg-white py-[17px] px-[21px] rounded-lg mt-5">
        <div className="flex justify-between items-center border-b pb-3">
          <div className="flex flex-row justify-between w-full">
            <h4 className="font-medium text-base-1 text-spacecadet-100">
              Profile
            </h4>
            <div onClick={checkEdit} className="flex justify-center items-center p-2 border rounded-md bg-[#f9dcdb] hover:cursor-pointer">
              <GrEdit size={20} color="#da494a"  />
            </div>
          </div>
          <div>
            <button
            // @click="showModalInformation = !showModalInformation"
            >
              <div className="flex justify-center items-center bg-primary w-9 h-9 rounded-lg"></div>
            </button>
          </div>
        </div>
        {/* <!-- list profile --> */}
        {isEdit ? (
          <div className="pt-3 flex  gap-y-3">
            <Form/>
          </div>
        ) : (
          <div className="pt-3 flex flex-col gap-y-3">
            {/* <!-- biography --> */}
            <div className="lg:grid lg:grid-cols-4">
              <p className="text-sm font-semibold text-[#797F99]">Biography</p>
              <p className="text-sm font-medium text-spacecadet-100 col-span-3">
                {dataUser.biography}
              </p>
            </div>

            {/* <!-- NIK --> */}
            <div className="lg:grid lg:grid-cols-4">
              <p className="text-sm font-semibold text-[#797F99]">NIK</p>
              <p className="text-sm font-medium text-spacecadet-100 col-span-3">
                {dataUser.nik}
              </p>
            </div>
            {/* <!-- Job Position --> */}
            <div className="lg:grid lg:grid-cols-4">
              <p className="text-sm font-semibold text-[#797F99]">
                Job Position
              </p>
              <p className="text-sm font-medium text-spacecadet-100 col-span-3">
                {dataUser.jobPosition}
              </p>
            </div>
            {/* <!-- Company --> */}
            <div className="lg:grid lg:grid-cols-4">
              <p className="text-sm font-semibold text-[#797F99]">Company</p>
              <p className="text-sm font-medium text-spacecadet-100 col-span-3">
                {dataUser.company}
              </p>
            </div>
            {/* <!-- Division --> */}
            <div className="lg:grid lg:grid-cols-4">
              <p className="text-sm font-semibold text-[#797F99]">Division</p>
              <p className="text-sm font-medium text-spacecadet-100 col-span-3">
                {dataUser.division}
              </p>
            </div>
            {/* <!-- Location --> */}
            <div className="lg:grid lg:grid-cols-4">
              <p className="text-sm font-semibold text-[#797F99]">Location</p>
              <p className="text-sm font-medium text-spacecadet-100 col-span-3">
                {dataUser.location}
              </p>
            </div>
          </div>
        )}
        {/* <!-- end profile --> */}
      </div>
    </>
  );
};
