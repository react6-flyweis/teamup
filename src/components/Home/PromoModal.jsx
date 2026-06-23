import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useRegister } from '../../hooks/useRegister';

// Validation schema
const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().refine((val) => {
    if (!val) return false;
    return isValidPhoneNumber(val);
  }, {
    message: 'Invalid phone number'
  }),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  newsletterSubscribed: z.boolean().default(true)
});

const PromoModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show promo modal after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      newsletterSubscribed: true
    }
  });

  // Setup registration mutation
  const registerMutation = useRegister();


  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:bottom-6 sm:right-6 z-[100] animate-slide-up">
      <div className="bg-gradient-to-br from-[#E1017D] to-[#b00162] text-white rounded-xl w-full sm:w-[400px] p-6 relative shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/20">
        <button
          className="absolute top-2 right-4 text-white text-3xl font-light hover:text-gray-200 transition-colors"
          onClick={() => setIsVisible(false)}
        >
          ×
        </button>

        {registerMutation.isSuccess ? (
          <div className="text-center py-8">
            <h2
              style={{ fontFamily: 'Posterama2001W04' }}
              className="text-2xl font-bold mb-4 uppercase tracking-wide"
            >
              Thank You!
            </h2>
            <p className="text-sm font-medium mb-6">
              You've successfully signed up. Check your email for your 10% discount code!
            </p>
            <button
              style={{ fontFamily: 'Posterama2001W04' }}
              className="bg-black text-white px-8 py-3 rounded font-bold hover:bg-gray-900 transition-colors uppercase text-sm"
              onClick={() => setIsVisible(false)}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2
              style={{ fontFamily: 'Posterama2001W04' }}
              className="text-[20px] font-bold leading-tight mb-6 mt-2 uppercase tracking-wide text-center"
            >
              SIGN UP TO RECEIVE 10% OFF YOUR FIRST GAME, NEWS & UPDATES
            </h2>
            
            <form onSubmit={handleSubmit((data) => registerMutation.mutate(data))} className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-semibold mb-1" style={{ fontFamily: 'Noir Pro' }}>
                  Name*
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  {...register('name')}
                  className="w-full px-4 py-3 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                {errors.name && (
                  <p className="text-cyan-200 text-xs mt-1 font-medium">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1" style={{ fontFamily: 'Noir Pro' }}>
                  Email*
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register('email')}
                  className="w-full px-4 py-3 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                {errors.email && (
                  <p className="text-cyan-200 text-xs mt-1 font-medium">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1" style={{ fontFamily: 'Noir Pro' }}>
                  Phone Number*
                </label>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      placeholder="Enter phone number"
                      value={value}
                      onChange={onChange}
                      defaultCountry="US"
                      className="flex items-center w-full px-4 py-3 bg-white text-black rounded focus-within:ring-2 focus-within:ring-cyan-400"
                      numberInputProps={{
                        className: "w-full bg-transparent border-none outline-none text-black ml-2"
                      }}
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-cyan-200 text-xs mt-1 font-medium">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1" style={{ fontFamily: 'Noir Pro' }}>
                  Password*
                </label>
                <input
                  type="password"
                  placeholder="Create a password"
                  {...register('password')}
                  className="w-full px-4 py-3 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                {errors.password && (
                  <p className="text-cyan-200 text-xs mt-1 font-medium">{errors.password.message}</p>
                )}
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletterSubscribed"
                  {...register('newsletterSubscribed')}
                  className="h-4 w-4 rounded text-pink-600 focus:ring-pink-500 border-gray-300"
                />
                <label htmlFor="newsletterSubscribed" className="ml-2 block text-xs font-medium text-white">
                  Subscribe to news, updates, and special offers
                </label>
              </div>

              {registerMutation.isError && (
                <div className="bg-red-900/50 border border-red-500 rounded p-3 text-xs text-red-200">
                  {registerMutation.error?.response?.data?.message || 'Registration failed. Please try again.'}
                </div>
              )}

              <div className="flex justify-start">
                <button
                  type="submit"
                  disabled={registerMutation.isPending}
                  style={{ fontFamily: 'Posterama2001W04' }}
                  className="bg-black text-white px-8 py-3 mt-2 rounded font-bold hover:bg-gray-900 transition-colors uppercase text-sm disabled:opacity-50"
                >
                  {registerMutation.isPending ? 'Signing Up...' : 'SIGN UP'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default PromoModal;
