export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
      <div>
        <h1>{id}番目の記事</h1>
      </div>
    )
  }