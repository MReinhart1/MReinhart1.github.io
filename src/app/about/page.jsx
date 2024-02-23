import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Michael Reinhart.  Canadian-American who loves exploring.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Michael Reinhart A Canadian-American who loves exploring.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I was born in Oakville Ontario, a suburb of Toronto, and moved to Connecticut when I was about two. Growing up I
              was obsessed with reading Greek and Norse Mythology, as well as climbing trees. I spent much of my time running 
              around the forrest behind my home after school, building a tree fort with my Father as well as bows and arrows 
              out of wooden dowels from Home Depot (until I almost lost my eye).
            </p>
            <p>
              As I grew older I started to play with computers. I started out with simple things like programming the steps 
              for a dot to escape a maze using functions: moveLeft(), moveRight(), moveForward(). Then my Father bought me a raspberry 
              pi for christmas. It was a <a href="https://www.raspberrypi.com/products/raspberry-pi-3-model-b/">Model 3 </a> 
              where I learned about basic bash scripting and python; as well as basic networking within a Local Area Network.
            </p>
            <p>
              Computer Science as a degree was an easy choice for me, I learned all about object oriented programming, networking,
              discrete math and sorted an array far too many times. 
            </p>
          </div>
        </div>
        <div className="lg:pl-20">

        {/* I also built out some great pet projects which you should check out on the projects page! */}
          <ul role="list">
            <SocialLink href="https://github.com/MReinhart1" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/michael-reinhart12/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:michaelreinhart112@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              michaelreinhart112@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
