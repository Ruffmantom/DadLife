import React, {useState} from "react";
import Layout from "../../components/userComponents/Layout";
import CreatePostModal from "../../components/userComponents/CreatePostModal";
import { isAuthenticated } from "../../auth/index";
import AddPostBtn from "../../components/userComponents/AddPostBtn";

export default function CommunityPage() {
  const { user, token } = isAuthenticated();
  const {modalOpen,setModalOpen}=useState(false)

  return (
    <Layout title="Community" page="dlc">
      Community Page
      <AddPostBtn
      modalOpen={modalOpen}
      setModalOpen={setModalOpen}
      />
      {modalOpen? <CreatePostModal userId={user._id} token={token} setModalOpen={setModalOpen} />:""}
    </Layout>
  );
}
