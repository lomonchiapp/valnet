import {doc, getDoc, deleteDoc } from 'firebase/firestore';
import { database } from '../firebase';

export const deleteTicket = async (id) => {
    try {
        const ticketDocRef = doc(database, 'tickets', id);
        const ticketDoc = await getDoc(ticketDocRef);
    
        if (ticketDoc.exists()) {
        await deleteDoc(ticketDocRef);
        } else {
        console.error('No such document!');
        }
    } catch (error) {
        console.error('Error deleting document:', error);
        throw error;
    }
    }