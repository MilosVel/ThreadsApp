// "use client";

// import * as z from "zod";
// import Image from "next/image";
// import { useForm } from "react-hook-form";
// import { usePathname, useRouter } from "next/navigation";
// import { ChangeEvent, useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";

// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";

// import { useUploadThing } from "@/lib/uploadthing";
// import { isBase64Image } from "@/lib/utils";

// import { UserValidation } from "@/lib/validations/user";
// import { updateUser } from "@/lib/actions/user.actions";

// interface Props {
//   user: {
//     id: string;
//     objectId: string;
//     username: string;
//     name: string;
//     bio: string;
//     image: string;
//   };
//   btnTitle: string;
// }

// // https://ui.shadcn.com/docs/components/form

// const AccountProfile = ({ user, btnTitle }: Props) => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const { startUpload } = useUploadThing("media");

//   const [files, setFiles] = useState<File[]>([]);

//   const form = useForm<z.infer<typeof UserValidation>>({
//     resolver: zodResolver(UserValidation),
//     defaultValues: {
//       profile_photo: user?.image ? user.image : "", // za sliku se mora izvrsiti konfiguracija u next.config.js
//       name: user?.name ? user.name : "",
//       username: user?.username ? user.username : "",
//       bio: user?.bio ? user.bio : "",
//     },
//   });

//   const onSubmit = async (values: z.infer<typeof UserValidation>) => {
//     const blob = values.profile_photo;

//     const hasImageChanged = isBase64Image(blob); // chack change
//     if (hasImageChanged) {
//       const imgRes = await startUpload(files);
//       console.log('Image response je:  ',imgRes)

//       if (imgRes && imgRes[0].fileUrl) {
//         values.profile_photo = imgRes[0].fileUrl; // automaticly changed values.profile_photo
//       }
//     }

//     await updateUser({ // imported from actions
//       name: values.name,
//       path: pathname,
//       username: values.username,
//       userId: user.id,
//       bio: values.bio,
//       image: values.profile_photo,
//     });

//     if (pathname === "/profile/edit") {
//       router.back();
//     } else {
//       router.push("/"); // sta je default za  router.push("/") -> page.tsx u (root) folderu
//     }
//   };

//   const handleImage = (
//     e: ChangeEvent<HTMLInputElement>,
//     fieldChange: (value: string) => void
//   ) => {
//     e.preventDefault();

//     const fileReader = new FileReader();

//     if (e.target.files && e.target.files.length > 0) { // nece raditi ako imamo > 1
//       const file = e.target.files[0];
//       setFiles(Array.from(e.target.files));

//       if (!file.type.includes("image")) return;

//       fileReader.onload = async (event) => {
//         const imageDataUrl = event.target?.result?.toString() || "";
//         fieldChange(imageDataUrl);
//       };

//       fileReader.readAsDataURL(file);
//     }
//   };

//   return (
//     <Form {...form}>
//       <form
//         className='flex flex-col justify-start gap-10'
//         onSubmit={form.handleSubmit(onSubmit)}
//       >
//         <FormField
//           control={form.control}
//           name='profile_photo'
//           render={({ field }) => (
//             <FormItem className='flex items-center gap-4'>
//               <FormLabel className='account-form_image-label'>
//                 {field.value ? (
//                   <Image
//                     src={field.value}
//                     alt='profile_icon'
//                     width={96}
//                     height={96}
//                     priority
//                     className='rounded-full object-contain'
//                   />
//                 ) : (
//                   <Image
//                     src='/assets/profile.svg'
//                     alt='profile_icon'
//                     width={24}
//                     height={24}
//                     className='object-contain'
//                   />
//                 )}
//               </FormLabel>
//               <FormControl className='flex-1 text-base-semibold text-gray-200'>
//                 <Input
//                   type='file'
//                   accept='image/*'
//                   placeholder='Add profile photo'
//                   className='account-form_image-input'
//                   onChange={(e) => handleImage(e, field.onChange)}
//                 />
//               </FormControl>
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name='name'
//           render={({ field }) => (
//             <FormItem className='flex w-full flex-col gap-3'>
//               <FormLabel className='text-base-semibold text-light-2'>
//                 Name
//               </FormLabel>
//               <FormControl>
//                 <Input
//                   type='text'
//                   className='account-form_input no-focus'
//                   {...field}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name='username'
//           render={({ field }) => (
//             <FormItem className='flex w-full flex-col gap-3'>
//               <FormLabel className='text-base-semibold text-light-2'>
//                 Username
//               </FormLabel>
//               <FormControl>
//                 <Input
//                   type='text'
//                   className='account-form_input no-focus'
//                   {...field}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name='bio'
//           render={({ field }) => (
//             <FormItem className='flex w-full flex-col gap-3'>
//               <FormLabel className='text-base-semibold text-light-2'>
//                 Bio
//               </FormLabel>
//               <FormControl>
//                 <Textarea
//                   rows={10}
//                   className='account-form_input no-focus'
//                   {...field}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <Button type='submit' className='bg-primary-500'>
//           {btnTitle}
//         </Button>
//       </form>
//     </Form>
//   );
// };

// export default AccountProfile;

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

"use client";

import * as z from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState, useLayoutEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { useUploadThing } from "@/lib/uploadthing";

import { UserValidation } from "@/lib/validations/user";
import { updateUser } from "@/lib/actions/user.actions";

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}

const AccountProfile = ({ user, btnTitle }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const { startUpload } = useUploadThing("media"); // This argument 'media' must be the same as in api/uploadthing/core.ts

  const [files, setFiles] = useState<File[]>([]);

  const [previewUrl, setPreviewUrl] = useState<string>();
  useLayoutEffect(() => {
    setPreviewUrl(user?.image ? user.image : "");
  }, [user]);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    trigger,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof UserValidation>>({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      profile_photo: user?.image ? user.image : "", // za sliku se mora izvrsiti konfiguracija u next.config.js
      name: user?.name ? user.name : "",
      username: user?.username ? user.username : "",
      bio: user?.bio ? user.bio : "",
    },
  });

  console.log("Forma je validan ", isValid);

  const onSubmit = async (values: z.infer<typeof UserValidation>) => {
    console.log("Submitting form ", values);

    await startUpload(files);

    await updateUser({
      // imported from actions
      name: values.name,
      path: pathname,
      username: values.username,
      userId: user.id,
      bio: values.bio,
      image: values.profile_photo,
    });

    if (pathname === "/profile/edit") {
      // check this !!!
      router.back();
    } else {
      router.push("/"); 
    }
  };

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      //     // nece raditi ako imamo e.target.files.length  > 1 -> this is array like object
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files)); // This must be array because I think we are allowed to submit many items, but we also must handle all of them on api/uploadthing/core

      if (!file.type.includes("image")) return;

      reader.onload = async (event) => {
        console.log(event.target?.result === reader?.result);
        // const imageDataUrl =  event.target?.result?.toString() || "";  // Variant 1
        const imageDataUrl = reader?.result?.toString() || ""; // Variant 2
        setValue("profile_photo", imageDataUrl);
        setPreviewUrl(imageDataUrl); // this allow real-time change. But aplication can work without it.
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-start gap-10"
    >
      {/* Bolje je koristiti donji nacin */}
      {/* {getValues('profile_photo') ? (
          <Image
            src={getValues('profile_photo')}
            alt='profile_icon'
            width={96}
            height={96}
            priority
            className='rounded-full object-contain'
          />
        ) : (
          <Image
            src='/assets/profile.svg'
            alt='profile_icon'
            width={24}
            height={24}
            className='object-contain'
          />
        )} */}

      {previewUrl ? (
        <Image
          src={previewUrl}
          alt="profile_icon"
          width={96}
          height={96}
          priority
          className="rounded-full object-contain"
        />
      ) : (
        <Image
          src="/assets/profile.svg"
          alt="profile_icon"
          width={24}
          height={24}
          className="object-contain"
        />
      )}

      <input
        type="file"
        id="profile_photo"
        accept="image/*"
        onChange={handleImage} // Call the handleImage function on file selection
        placeholder="Add profile photo"
        className="account-form_image-input"
      />

      <label htmlFor="name" className="text-base-semibold text-light-2">
        Name:
      </label>
      <input
        id="name"
        type="text"
        {...register("name")}
        placeholder="Choose name"
        className="account-form_input no-focus p-1"
      />
      {errors.name && (
        <p className="bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start">
          {errors.name?.message}
        </p>
      )}

      <label htmlFor="username" className="text-base-semibold text-light-2">
        Username:
      </label>
      <input
        id="username"
        type="text"
        {...register("username")}
        placeholder="johndoe90"
        className="account-form_input no-focus p-1"
      />
      {errors.username && (
        <p className="bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start">
          {errors.username?.message}
        </p>
      )}

      <label htmlFor="bio" className="text-base-semibold text-light-2">
        Bio
      </label>
      <textarea
        id="bio"
        {...register("bio")}
        placeholder=" Enter Bio"
        className="account-form_input no-focus p-1"
      />
      {errors.bio && (
        <p className="bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start">
          {errors.bio?.message}
        </p>
      )}

      <button type="submit" className="bg-primary-500">
        {btnTitle}
      </button>
    </form>
  );
};

export default AccountProfile;
