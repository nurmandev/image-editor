import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "PROFICIENT - Add Authentic Film Grain to Your Images",
  description = "Transform your digital photos with Proficient . Add realistic film grain effects to give your images a classic, vintage look. Easy to use, professional results.",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Proficient - Film Grain Effect Showcase",
        },
      ],
      siteName: "Proficient",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@ProficientAde",
    },
    icons,
    metadataBase: new URL("https://Proficient.vercel.app/"),
    alternates: {
      canonical: "https://proficient.vercel.app/",
    },
    keywords: [
      "film grain",
      "photo editing",
      "vintage effect",
      "image processing",
      "retro photography",
      "digital to analog",
      "photo filter",
    ],
    authors: [{ name: "Armaan Mishra" }],
    category: "Photography",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
