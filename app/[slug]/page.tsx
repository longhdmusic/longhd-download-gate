import DownloadGate from "../../components/DownloadGate";
import { getTrack } from "../../data/tracks";
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <DownloadGate track={getTrack(slug)}/>}
