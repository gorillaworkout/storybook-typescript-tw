import React from 'react';
// import './button.css';


interface ProfileHeaderProps {
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
}

/**
 * Primary UI component for user interaction
 */
export const ProfileHeader = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  name,
  bgImage,
  image,
  title,
  ...props
}: ProfileHeaderProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const bg_alternate = 'https://mydigilearn-dev.s3.ap-southeast-3.amazonaws.com/content/user-upload/cover/2023/6/2023627154655.png'
  const image_alternate = 'https://mydigilearn-dev.s3.ap-southeast-3.amazonaws.com/content/user-upload/avatar/2023/5/2023516131442.JPG'
  return (
    <>
        <div className="flex flex-col relative rounded-lg bg-white drop-shadow-1xl lg:mx-5">
          <div>
            <img src={bgImage? bgImage : bg_alternate}
              alt="bg_image"
              className="object-cover w-full cursor-pointer lg:rounded-t-lg aspect-[11/3]" 
              />
              {/* @click="showModalBanner = !showModalBanner" */}
            
            <div className="absolute z-10 left-[110px] md:left-[170px] lg:left-[180px] bottom-[55px] md:bottom-[60px] lg:bottom-[80px] flex flex-col text-white">
              <h1 className="text-[#20253e] font-medium text-sm md:text-[24px]">
                {name ? name : 'Default Name'}
              </h1>
              <h4 className="text-[#20253e] font-light text-xs md:text-base">
                {title?title : 'Fresh Graduate'}
              </h4>
            </div>

            <div 
              className="absolute top-2 right-2 cursor-pointer"
              >
              {/* @click="showModalBanner = !showModalBanner" */}
              {/* <SvgEdit :size="34" /> */}
            </div>
          </div>

          {/* <!-- Profile Image --> */}
          <div className="absolute w-[80px] h-[80px] md:w-[115px] md:h-[115px] lg:w-[130px] lg:h-[130px] bottom-6 md:bottom-5 lg:bottom-6 bg-white left-4 md:left-8 rounded-lg p-1 drop-shadow-1xl">
            <img src={image ? image : image_alternate}
              alt="avatar"
              className="object-cover w-full h-full m-auto rounded-lg cursor-pointer"
              />
            <div 
              className="absolute top-2 right-2 cursor-pointer"
              >
            </div>
          </div>
        </div>
    </>
  );
};
