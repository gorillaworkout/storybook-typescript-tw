import React from 'react';
// import './button.css';
import { Card } from '../../Card/Card';

interface ProfileCardProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
    /**
   * Profile Name User
   */
  name?:string
      /**
   * Image user
   */
  image?:string
     /**
   * Image user
   */
  bgImage?:string
  /**
 * Title User / Pangkat
 */
  title?:string
    /**
 * List of Interest, array of string
 */
    interest?:string[]

}

/**
 * Primary UI component for user interaction
 */
export const ProfileInterest = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  name,
  bgImage,
  image,
  title,
  interest,
  ...props
}: ProfileCardProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const bg_alternate = 'https://mydigilearn-dev.s3.ap-southeast-3.amazonaws.com/content/user-upload/cover/2023/6/2023627154655.png'
  const image_alternate = 'https://mydigilearn-dev.s3.ap-southeast-3.amazonaws.com/content/user-upload/avatar/2023/5/2023516131442.JPG'
  console.log(interest,'intersest')
  return (
    <>
      <div className="bg-white py-[17px] px-[21px] rounded-lg relative mt-5 ">
          <div className="flex justify-between items-center border-b pb-3">
            <h3
              className="font-medium text-base-1 text-spacecadet-100"
            >
              Interest
            </h3>
            <div>
              <button
                className="prevent-class-interest"
                // @click="showModalInterest = !showModalInterest"
              >
                <div 
                  className="flex justify-center items-center bg-primary w-9 h-9 rounded-lg"
                >
                  {/* <SvgEdit 
                    :color="styling.primaryColor" 
                    :size="22"
                  /> */}
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-[10px] mt-3">
            {
              interest?.map((val,index)=>{
                return (
                  <div key={index}>
                    <Card label={val} backgroundColor="#f9dcdb" id={index}/>
                  </div>
                )
              })
            }
          </div>
        {/* <modal-interest v-model="showModalInterest" /> */}
      </div>
    </>
  );
};
