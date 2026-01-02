// Declare $zopim as a global variable
declare var $zopim: any;

const zopimEvents = {
  toggleChat: () => {
    if (typeof window !== "undefined" && $zopim) {
      $zopim.livechat.window.toggle();
    }
  },
  addTag: (tag: string) => {
    if (typeof window !== "undefined" && $zopim) {
      $zopim.livechat.addTags(tag);
    }
  },
  removeTag: (tag: string) => {
    if (typeof window !== "undefined" && $zopim) {
      $zopim.livechat.removeTags(tag);
    }
  },
  setName: (name: string) => {
    if (typeof window !== "undefined" && $zopim) {
      $zopim.livechat.setName(name);
    }
  },
  setEmail: (email: string) => {
    if (typeof window !== "undefined" && $zopim) {
      $zopim.livechat.setEmail(email);
    }
  },
  setPhone: (phone: string) => {
    if (typeof window !== "undefined" && $zopim) {
      $zopim.livechat.setPhone(phone);
    }
  },
};

export default zopimEvents;
