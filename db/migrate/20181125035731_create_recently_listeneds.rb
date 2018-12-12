class CreateRecentlyListeneds < ActiveRecord::Migration[5.2]
  def change
    create_table :recently_listeneds do |t|
      t.references :user, foreign_key: true
      t.references :album, foreign_key: true

      t.timestamps
    end
  end
end
