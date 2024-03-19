const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const message = data.get("message");
    console.log(name, email, phone, message);
    return {
      message: "Thanks for your message!"
    };
  }
};
export {
  actions
};
