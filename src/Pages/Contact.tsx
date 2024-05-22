import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Fox } from '../models/index';
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [currentAnimation, setCurrentAnimation] = useState('idle');
    const { alert, showAlert, hideAlert } = useAlert();

    const handleChange = (e: { target: { name: string; value: string } }) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);
        setCurrentAnimation('hit');

    };

    const handleFocus = () => setCurrentAnimation('walk');
    const handleBlur = () => setCurrentAnimation('idle');

    return (
        <section className='relative flex lg:flex-row flex-col max-container'>
            <div className='flex-1 min-w-[50%] flex flex-col'>
                {alert.show && <Alert {...alert}/>}
                <h1 className='head-text'>Get in Touch</h1>

                <form
                    onSubmit={handleSubmit}
                    className='w-full flex flex-col gap-7 mt-14'
                >
                    <label className='text-black-500 font-semibold'>
                        Name
                        <input
                            type='text'
                            name='name'
                            className='input'
                            placeholder='John'
                            required
                            value={form.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className='text-black-500 font-semibold'>
                        Email
                        <input
                            type='email'
                            name='email'
                            className='input'
                            placeholder='John@gmail.com'
                            required
                            value={form.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className='text-black-500 font-semibold'>
                        Message
                        <textarea
                            name='message'
                            rows={4}
                            className='textarea'
                            placeholder='Write your thoughts here...'
                            value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <button
                        type='submit'
                        disabled={loading}
                        className='btn'
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </div>
            <div className='lg:w-1/2 w-full lg:h-auto md-h-[550px] h-[350px]'>
                <Canvas
                    camera={{
                        position: [0, 0, 5],
                        fov: 75,
                        near: 0.1,
                        far: 1000,
                    }}
                >
                    <directionalLight position={[0, 0, 1]} intensity={2.5} />
                    <ambientLight intensity={0.5} />
                    <Suspense fallback={<Loader />}>
                        <Fox
                            currentAnimation={currentAnimation}
                            position={[0, 0.35, 0]}
                            rotation={[12.5, -0.6, 0]}
                            scale={[0.5, 0.5, 0.5]}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

export default Contact;
