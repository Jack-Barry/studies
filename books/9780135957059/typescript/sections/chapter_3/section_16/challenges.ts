/* If I were getting deep into this, I'd construct this type using a schema validation library */
type Contact = {
  id: string;
  name: string;
  phoneNumber: string;
  directions?: string;
};

/* Crude functions for translating to binary, definitely not production-ready */
function contactToBinary(contact: Contact): Buffer {
  return Buffer.from(JSON.stringify(contact), "binary");
}

function contactFromBinary(buffer: Buffer): Contact {
  const objFromBuffer = JSON.parse(buffer.toString("utf8"));
  /* This should be validated, but for a book study code example it's fine*/
  return objFromBuffer as Contact;
}

run();
function run() {
  const contacts: Contact[] = [
    { id: "1", name: "Contact One", phoneNumber: "+15555555555" },
    { id: "2", name: "Contact Two", phoneNumber: "+15555555556" },
    {
      id: "3",
      name: "Contact Three",
      phoneNumber: "+15555555557",
      directions: "You can't get there from here",
    },
  ];

  const contactsAsBinary = contacts.map((c) => contactToBinary(c));
  console.log({ contactsAsBinary });

  const contactsFromBinary = contactsAsBinary.map((c) => contactFromBinary(c));
  console.log({ contactsFromBinary });
}
