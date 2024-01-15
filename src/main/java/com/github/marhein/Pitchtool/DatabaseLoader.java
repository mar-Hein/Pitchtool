package com.github.marhein.Pitchtool;

import com.github.marhein.Pitchtool.model.Tab;
import com.github.marhein.Pitchtool.model.TabRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final TabRepository repository;

    @Autowired
    public DatabaseLoader(TabRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new Tab("Main"));
        this.repository.save(new Tab("Sec"));
    }
}
