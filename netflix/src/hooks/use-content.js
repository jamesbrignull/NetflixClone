import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useContext(target) {
    const [content, setContent] = useState([]);
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        firebase
            .firestore()
            .collection(target)
            .get()
            .then((snapsot) => {
                const allContent = snapshot.docs.map((contentObj) => ({
                    ...contentObj.data(),
                    docId: contentObj.id,
                }));

                setContent(allContent);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, [])

    return { [target]: content };
}