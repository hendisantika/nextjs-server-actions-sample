import prisma from "@/lib/db";
import {Contact} from "@prisma/client";
import {revalidatePath} from "next/cache";

type Props = { contact?: Contact | null };

export default function ContactForm({contact}: Props) {
    async function addContact(formData: FormData) {
        "use server";
        await prisma.contact.create({
            data: {
                name: formData.get("name") as string,
                phone: formData.get("phone") as string,
                city: formData.get("city") as string
            }
        });
        revalidatePath("/");
    }

}
