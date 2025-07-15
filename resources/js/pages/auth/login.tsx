// import { Head, useForm } from '@inertiajs/react';
// import { LoaderCircle } from 'lucide-react';
// import { FormEventHandler } from 'react';

// import InputError from '@/components/input-error';
// import TextLink from '@/components/text-link';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import AuthLayout from '@/layouts/auth-layout';

// type LoginForm = {
//     email: string;
//     password: string;
//     remember: boolean;
// };

// interface LoginProps {
//     status?: string;
//     canResetPassword: boolean;
// }

// export default function Login({ status, canResetPassword }: LoginProps) {
//     const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
//         email: '',
//         password: '',
//         remember: false,
//     });

//     const submit: FormEventHandler = (e) => {
//         e.preventDefault();
//         post(route('login'), {
//             onFinish: () => reset('password'),
//         });
//     };

//     return (
//         <AuthLayout title="Iniciar Sesión" description="Ingresa tu email y contraseña">
//             <Head title="Log in" />

//             <form className="flex flex-col gap-6" onSubmit={submit}>
//                 <div className="grid gap-6">
//                     <div className="grid gap-2">
//                         <Label htmlFor="email">Usuario</Label>
//                         <Input
//                             id="email"
//                             type="email"
//                             required
//                             autoFocus
//                             tabIndex={1}
//                             autoComplete="email"
//                             value={data.email}
//                             onChange={(e) => setData('email', e.target.value)}
//                             placeholder="usuario@example.com"
//                         />
//                         <InputError message={errors.email} />
//                     </div>

//                     <div className="grid gap-2">
//                         <div className="flex items-center">
//                             <Label htmlFor="password">Contraseña</Label>
//                             {canResetPassword && (
//                                 <TextLink href={route('password.request')} className="ml-auto text-sm" tabIndex={5}>
//                                     Olvidé mi contraseña?
//                                 </TextLink>
//                             )}
//                         </div>
//                         <Input
//                             id="password"
//                             type="password"
//                             required
//                             tabIndex={2}
//                             autoComplete="current-password"
//                             value={data.password}
//                             onChange={(e) => setData('password', e.target.value)}
//                             placeholder="Contraseña"
//                         />
//                         <InputError message={errors.password} />
//                     </div>

//                     <div className="flex items-center space-x-3">
//                         <Checkbox
//                             id="remember"
//                             name="remember"
//                             checked={data.remember}
//                             onClick={() => setData('remember', !data.remember)}
//                             tabIndex={3}
//                         />
//                         <Label htmlFor="remember">Recordarme</Label>
//                     </div>

//                     <Button type="submit" className="mt-4 w-full" tabIndex={4} disabled={processing}>
//                         {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
//                         Ingresar
//                     </Button>
//                 </div>
        
//                 <div className="text-muted-foreground text-center text-sm">
//                     Don't have an account?{' '}
//                     <TextLink href={route('register')} tabIndex={5}>
//                         Sign up
//                     </TextLink>
//                 </div>
       
//             </form>

//             {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}
//         </AuthLayout>
//     );
// }
// NEW CODE MODIFICATION
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

export default function LoginForm({ canResetPassword }: { canResetPassword?: boolean }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4">
            <div className="bg-white border border-gray-200 shadow-lg rounded-xl w-full max-w-md text-center overflow-hidden animate-fadeInDown">
                <div className="p-6">
                    <img
                        src="/logo.jpeg"
                        alt="Logo"
                        className="mx-auto w-32 mb-4"
                    />
                    <h1 className="text-2xl font-semibold text-black"></h1>
                </div>

                <form onSubmit={submit} className="flex flex-col gap-6 px-8 pb-6 text-left">
                    <div className="grid gap-2 animate-fadeIn">
                        <Label htmlFor="email">Usuario</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            autoFocus
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="usuario@example.com"
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="grid gap-2 animate-fadeIn delay-200">
                        <div className="flex items-center">
                            <Label htmlFor="password">Contraseña</Label>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            required
                            autoComplete="current-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Contraseña"
                        />
                        <InputError message={errors.password} />
                    </div>

                    <Button
                        type="submit"
                        className="w-full mt-4 bg-blue-500 text-white hover:bg-blue-600 animate-fadeIn delay-300"
                        disabled={processing}
                    >
                        {processing && (
                            <LoaderCircle className="h-4 w-4 animate-spin mr-2 inline-block" />
                        )}
                        INGRESAR
                    </Button>
                </form>

                <div className="bg-gray-100 border-t border-gray-200 py-4 text-sm text-gray-00 animate-fadeIn delay-500">
                    <a
                        className="underlineHover hover:text-black transition-all duration-200"
                    >
                        MACO System
                    </a>
                </div>
            </div>
        </div>
    );
}

