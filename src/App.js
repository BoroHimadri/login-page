import './App.css';
import { TextInput,PasswordInput, Checkbox, Button, Divider } from '@mantine/core'
import { FcGoogle } from "react-icons/fc";
import { LoginSvg } from './components/svgs/LoginSvg';
import { useState,useEffect } from 'react';
import { LoginSvgMobile } from './components/svgs/LoginSvgMobile';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className=" bg-gray-100 ">
      <div className='h-screen flex flex-col lg:flex-row justify-center items-center gap-6 '>
        {isMobile ? ( 
        <>
        <LoginSvgMobile/>
        <div className=' bg-white shadow-lg p-6 rounded lg:min-h-[60vh] lg:min-w-[30vw]'>
      <p className=' text-black text-xl font-bold'>
    Login
      </p>  
      <p className=' text-gray-400 my-3'>
      Don't have an account yet? <span className=' text-purple-600 underline'>Sign Up</span>
      </p>
      <TextInput
      radius="md"
      label="Email"
  
      placeholder="Input placeholder"
    />
     <PasswordInput
     className=' my-3'
      radius="md"
      label="Password"
      placeholder="Input placeholder"
    />

    <Checkbox
      label="Remember me"
    />
   <Button  variant="filled" color="violet" fullWidth className=' my-3'>LOGIN</Button>

   <Divider my="xs" label="Or Login With" labelPosition="center" />

   <div className=' flex flex-row gap-4 justify-center'>
   <Button leftSection={<FcGoogle size={14} />} variant="default">
       <p className=' text-red-600'>Google
        </p> 
      </Button>

   </div>
      </div>
        </>
      ):(
        <>
             <div className=' bg-white shadow-lg p-6 rounded lg:min-h-[60vh] lg:min-w-[30vw]'>
      <p className=' text-black text-xl font-bold'>
    Login
      </p>  
      <p className=' text-gray-400 my-3'>
      Don't have an account yet? <span className=' text-purple-600 underline'>Sign Up</span>
      </p>
      <TextInput
      radius="md"
      label="Email"
  
      placeholder="Input placeholder"
    />
     <PasswordInput
     className=' my-3'
      radius="md"
      label="Password"
      placeholder="Input placeholder"
    />

    <Checkbox
      label="Remember me"
    />
   <Button  variant="filled" color="violet" fullWidth className=' my-3'>LOGIN</Button>

   <Divider my="xs" label="Or Login With" labelPosition="center" />

   <div className=' flex flex-row gap-4 justify-center'>
   <Button leftSection={<FcGoogle size={14} />} variant="default">
       <p className=' text-red-600'>Google
        </p> 
      </Button>

   </div>
      </div>
      <LoginSvg/>
        </>
      )}
      </div>
    </div>
  );
}

export default App;
