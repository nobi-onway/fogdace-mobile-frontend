import { useRouter } from "expo-router";

function useNavigation() {
    const router = useRouter();

    const go_back = () => router.back();
    const go_to_sign_in = () => router.push('/sign-in');
    const go_to_sign_up = () => router.push('/sign-up');
    const go_to_feed = () => router.push('/feed');
    const go_to_dictionary_of = (id) => router.push({ pathname: '/explore/dictionary', params: { id: id } });
    const go_to_dictionary_detail_of = (info) => router.push({ pathname: '/explore/dictionary/detail', params: { ...info } })
    const go_to_knowledge_of = (id) => router.push({ pathname: '/explore/knowledge', params: { id: id } });
    const go_to_knowledge_detail_of = (info) => router.push({ pathname: '/explore/knowledge/detail', params: { ...info } })
    const go_to_trading = () => router.push('/explore/trading')

    return {
        go_back,
        go_to_sign_in,
        go_to_feed,
        go_to_sign_up,
        go_to_dictionary_of,
        go_to_dictionary_detail_of,
        go_to_knowledge_of,
        go_to_knowledge_detail_of,
        go_to_trading,
    };
}

export default useNavigation;