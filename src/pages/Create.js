import { useEffect, useState } from "react";
import Header from "../components/Header";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button,
  FormText,
} from "reactstrap";
import axios from "axios";

const Create = () => {
  const [form, setFormData] = useState({
    name: "",
  });
  useEffect(() => {}, []);

  const submit = async () => {
    if (form.name === "" || form.nfturl === "") {
      alert("name and nfturl is required");
      return;
    }
    try {
      const res = await axios.post(
        "https://thentic.tech/api/nfts/mint",
        {
          key: "3ape5peE6EAbPXq60CmgzgcBnVkn5lIY",
          chain_id: 3,
          contract: "0xf99d4f0d5cba28d172917ad9f65593cb26191caa",
          nft_id: parseInt(form.nft_id),
          nft_data: JSON.stringify({
            description: form.description,
            external_url: "https://openseacreatures.io/3",
            image: form.nfturl,
            name: form.name,
            attributes: [
              {
                trait_type: "Base",
                value: "Starfish",
              },
              {
                trait_type: "Eyes",
                value: "Big",
              },
            ],
          }),
          to: "0x2a8C5077FfFdd82c90985F0065BaDFa723280360",
          webhook_url: "https://thentic.tech/request?id=Baqc0vJTritnChB7",
          redirect_url: "https://localhost:3000",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("success");
    } catch (e) {
      alert("failed");
    }
  };

  const setForm = (key, value) => {
    setFormData({
      ...form,
      [key]: value,
    });
  };
  return (
    <div className="createNFTPage">
      <Header />
      <div className="p-50">
        <FormGroup row>
          <Label for="nftname" sm={2}>
            Name
          </Label>
          <Col sm={10}>
            <Input
              id="nftname"
              name="name"
              placeholder="NFT name"
              type="text"
              value={form.name}
              onChange={(e) => setForm("name", e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="nftname" sm={2}>
            NFT ID
          </Label>
          <Col sm={10}>
            <Input
              id="nftname"
              name="nft_id"
              placeholder="NFT ID"
              type="number"
              value={form.nft_id}
              onChange={(e) => setForm("nft_id", e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Description
          </Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name="description"
              type="textarea"
              value={form.description}
              onChange={(e) => setForm("description", e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="nfturl" sm={2}>
            Image Url
          </Label>
          <Col sm={10}>
            <Input
              id="nfturl"
              name="nfturl"
              placeholder="NFT URL"
              type="text"
              value={form.nfturl}
              onChange={(e) => setForm("nfturl", e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col
            sm={{
              offset: 2,
              size: 10,
            }}
          >
            <Button onClick={submit}>Submit</Button>
          </Col>
        </FormGroup>
      </div>
    </div>
  );
};

export default Create;
