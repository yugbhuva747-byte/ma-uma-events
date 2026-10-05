import type { Metadata } from 'next';
import './fonts.css';
import './globals.css';
export const metadata: Metadata = { title:'Maa Uma Events | Moments Made Extraordinary', description:'Thoughtfully imagined weddings, corporate experiences and unforgettable celebrations. Explore event design, production and planning with Maa Uma Events.', icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
