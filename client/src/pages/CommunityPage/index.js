import React, { useState } from "react";
import Layout from "../../components/userComponents/Layout";
import CreatePostModal from "../../components/userComponents/CreatePostModal";
import { isAuthenticated } from "../../auth/index";
import AddPostBtn from "../../components/userComponents/AddPostBtn";
// getting redux store
import { useSelector } from "react-redux";

export default function CommunityPage() {
  const { user, token } = isAuthenticated();
  // getting redux state
  const modalOpen = useSelector((state) => state.modalOpen);
  return (
    <Layout title="Community" page="dlc">
      Community Page
      <AddPostBtn />
      {modalOpen ? (
        <CreatePostModal
          userId={user._id}
          token={token}
        />
      ) : (
        ""
      )}
    </Layout>
  );
}
