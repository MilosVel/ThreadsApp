// Resource: https://docs.uploadthing.com/api-reference/react#generatereacthelpers
// Copy paste (be careful with imports)

import { generateReactHelpers } from "@uploadthing/react/hooks";

import type { OurFileRouter } from "@/app/api/uploadthing/core"; // This is on backend: core.ts and route.ts

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();
