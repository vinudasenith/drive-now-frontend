import { createClient } from '@supabase/supabase-js'

const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhkc3d4bHBhaGxmcmF5YWxsb2ppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5Njk3NTQsImV4cCI6MjA2MzU0NTc1NH0.xQBml_cGzlZQ58LOJttbKCODBvC0KzAkq5-l4FVnzmk";

const supabase_url = "https://xdswxlpahlfrayalloji.supabase.co"

const supabase = createClient(supabase_url, anon_key);

export default function mediaUpload(file) {

    return new Promise((resolve, reject) => {
        if (file == null) {
            reject("No file selected");
        }
        const timestamp = new Date().getTime();
        const fileName = timestamp + file.name;

        supabase.storage.from("images").upload(fileName, file, {
            cacheControl: '3600',
            upsert: false

        }).then((res) => {
            const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
            resolve(publicUrl);
        }).catch(() => {
            reject("Error uploading file");
        })
    });
}