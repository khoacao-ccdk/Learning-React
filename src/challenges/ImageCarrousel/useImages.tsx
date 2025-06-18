import { useRequest } from "ahooks";

export default function useImages() {
  const { loading, data: images = [] } = useRequest(async () => {
    const response = await fetch(
      "https://www.reddit.com/r/aww/top/.json?t=all"
    );
    if (!response.ok) {
      return [];
    }

    const body = await response.json();
    const images = body?.data?.children ?? [];
    return images.map((image) => image.data.url_overridden_by_dest);
  });

  return { loading, images };
}
