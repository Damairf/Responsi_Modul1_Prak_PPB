import express from "express";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();
const app = express();
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Tambah sepatu
app.post("/items", async (req, res) => {
  const { nama_pelanggan, jenis_sepatu, status, tanggal_masuk } = req.body;

  const { data, error } = await supabase
    .from("sepatu")
    .insert([{ nama_pelanggan, jenis_sepatu, status, tanggal_masuk }])
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data[0]);
});

// Menambil semua data dan filter
app.get("/items", async (req, res) => {
  const { status } = req.query;
  let query = supabase.from("sepatu").select("*");

  if (status) query = query.eq("status", status);

  const { data, error } = await query;
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// Mengambil by id
app.get("/items/:id", async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("sepatu")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
});

// Update data by id
app.put("/items/:id", async (req, res) => {
  const { id } = req.params;
  const { nama_pelanggan, jenis_sepatu, status, tanggal_masuk } = req.body;

  const { data, error } = await supabase
    .from("sepatu")
    .update({ nama_pelanggan, jenis_sepatu, status, tanggal_masuk })
    .eq("id", id)
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
});

// Hapus data by id
app.delete("/items/:id", async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from("sepatu").delete().eq("id", id);
  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: `Sepatu dengan ID ${id} berhasil dihapus.` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));