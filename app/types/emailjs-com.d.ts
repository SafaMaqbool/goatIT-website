// src/@types/emailjs-com.d.ts
declare module 'emailjs-com' {
  interface SendParams {
    service_id: string;
    template_id: string;
    template_params: Record<string, any>;
    user_id: string;
  }

  function send(
    serviceId: string,
    templateId: string,
    templateParams: Record<string, any>,
    userId: string
  ): Promise<any>;

  export default {
    send
  };
}
